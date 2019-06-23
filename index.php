<!DOCTYPE html>
<html>
<head>
    <style>
        form {text-align: center;}
        body {background-color: powderblue;}
        h1   {color: blue;
            text-align: center}
        h2   {text-align: center}
        h3   {text-align: center}

        h4   {padding-left: 97px}
        div {margin-left: 100PX}
        #button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;

        }
        #vaildresultID {color: blue; font-size: 25PX;font-weight: bold}
        #invaildresultID {color: red; font-size: 25PX;font-weight: bold}
        #datapathlabelID,#keywordlabelID,#messagelabelID {color: red; font-size: 23PX; font-weight: bold}
        #errdataPathID,#errmessageID{font-size: 23PX;font-style: italic; font-weight: bold}









    </style>
    <title></title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ajv/6.10.0/ajv.bundle.js"></script>
    <script src="bundle.js"></script>
</head>
<body>
    <textarea rows="5" cols="5" id="schmaID" style="display:none;" ><?php echo file_get_contents("schema.json");?></textarea><br>
    <h1>Validating maDMP against RDA DMP schema</h1>
    <h2>Tool for validating machine actionable data management plan against RDA DMP standard schema</h2>
    <h3>Devloped by Ahmad Alhirthani for the course From design to software in TUWIEN</h3>
    <h4>maDMP:</h4>
    <form action="<?php echo $_SERVER['PHP_SELF'];?> " method="POST">
        <textarea style="" rows="25" cols="150" id="dataID"  placeholder="Paste your maDMP here please!!"></textarea><br>
    </form>
    <div>

        <button  id="button" onclick="validate()">Test Validation</button><br>
        <label id="vaildresultID"></label>
        <label id="invaildresultID"></label><br><br>
        <label id="datapathlabelID"></label>
        <label id="errdataPathID"></label><br>
        <label id="keywordlabelID"></label>
        <label id="messagelabelID"></label>
        <label id="errmessageID"></label>

    </div>
    <script type="text/javascript">
        function validate(){
            document.getElementById('vaildresultID').innerHTML = "";
            document.getElementById('invaildresultID').innerHTML = "";
            document.getElementById('datapathlabelID').innerHTML = "";
            document.getElementById('errdataPathID').innerHTML = "";
            document.getElementById('keywordlabelID').innerHTML = "";
            document.getElementById('messagelabelID').innerHTML = "";
            document.getElementById('errmessageID').innerHTML = "";




            var maDMP = document.getElementById("dataID").value;
            var maDMPJSON = JSON.parse(maDMP);//.substring(1, maDMP.length));
            var schema = document.getElementById("schmaID").textContent;
            console.log(schema);
            var schemaJSON = JSON.parse(schema.substring(1, schema.length));

            var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
            var validate = ajv.compile(schemaJSON);
            var valid = validate(maDMPJSON);
            if (!valid) {
                console.log("validate.errors");
                console.log(validate.errors);
                var errors=validate.errors;
                document.getElementById('invaildresultID').innerHTML = "Not validated maDMP" ;
                document.getElementById('datapathlabelID').innerHTML ="Data Path: ";
                document.getElementById('errdataPathID').innerHTML =errors[0]['dataPath'];
                document.getElementById('messagelabelID').innerHTML = "Message: ";
                document.getElementById('errmessageID').innerHTML =errors[0]['message'];
                console.log("invalid");
            }
            else {
                document.getElementById('vaildresultID').innerHTML = "Validated maDMP" ;
                console.log("valid");
            }


        }
    </script>

</body>
</html>