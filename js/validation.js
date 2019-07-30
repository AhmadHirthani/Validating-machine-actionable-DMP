var maDMPJSON = null;
var isVocabExisted = $('#certificateExistance').val();
var isValidationPassed = true;

function validate() {
    isValidationPassed = true;
    document.getElementById('vaildresultID').innerHTML = "";
    document.getElementById('invaildresultID').innerHTML = "";
    document.getElementById('datapathlabelID').innerHTML = "";
    document.getElementById('errdataPathID').innerHTML = "";
    document.getElementById('messagelabelID').innerHTML = "";
    document.getElementById('errmessageID').innerHTML = "";
    document.getElementById('allowedValueslabelID').innerHTML = "";
    document.getElementById('allowedValuesID').innerHTML = "";
    var maDMP = document.getElementById("dataID").value;
    maDMPJSON = JSON.parse(maDMP);
    //var maDMPJSON = JSON.parse(maDMP.substring(1, maDMP.length));
    console.log("maDMPJSON object:");
    console.log(maDMPJSON);
    var schemaJSON = data;
    //console.log(schemaJSON);
    var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    var validate = ajv.compile(schemaJSON);
    var valid = validate(maDMPJSON);
    if (!valid) {
        console.log("validate.errors");
        console.log(validate.errors);
        var errors = validate.errors;
        document.getElementById('invaildresultID').innerHTML = "Not validated maDMP";
        document.getElementById('errdataPathID').innerHTML = "Data Path: " + errors[0]['dataPath'];
        document.getElementById('errmessageID').innerHTML = "Message: " + errors[0]['message'];
        if (errors[0]['params']['allowedValues']) {
            document.getElementById('allowedValuesID').innerHTML = "Allowed Values: " + errors[0]['params']['allowedValues'];
        }
        else {
            document.getElementById('allowedValueslabelID').innerHTML = "";
            document.getElementById('allowedValuesID').innerHTML = "";
        }
        document.getElementById('invaildresultID').classList.add('text-danger');
        document.getElementById('errdataPathID').classList.add('text-danger');
        document.getElementById('errmessageID').classList.add('text-danger');

        console.log("invalid");
    }

    //maDMPJSON.dmp.dataset[0].distribution[0].license[0].license_ref
    else {
        if (maDMPJSON != null && maDMPJSON.dmp != null && maDMPJSON.dmp != undefined) {
            var isValidLink = true;
            var isWorkingLink = true;
            maDMPJSON.dmp.dataset.forEach(function (ds_element) {
                //dataset distribtuion loop
                ds_element.distribution.forEach(function (dist_element) {
                    dist_element.license.forEach(function (li_element) {


                        try {
                            $.ajax({
                                url: li_element.license_ref,
                                type: 'HEAD',
                                dataType: 'jsonp',
                                complete: function(xhr, textStatus) {
                                    if (xhr.status == 404) {
                                        document.getElementById('invaildresultID').innerHTML = " But " + li_element.license_ref + " is not a accessible!";
                                    }
                                }
                            })
                        } catch (e) {

                        }
                    }); //


                }); //end of distribution loop
            }); //end of datasets loop

        }
        setTimeout(function () {
            printResult();
        }, 500);
    }
}



function printResult() {
    if (!isValidationPassed)
        return;
    document.getElementById('vaildresultID').innerHTML = "Validated - the maDMP instance is conform the the schema";
    document.getElementById('vaildresultID').classList.add('text-success');
    console.log("valid");
}





function changeInputText(inputID, labelID) {
    $('#' + labelID).text($('#' + inputID).val().split('\\').pop());
}
