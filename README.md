# Validating machine actionable DMP against specified schema
This project was created for the course From Design to Software on the TU Wien in SS2019.

# Introduction
This project serves as a tool to verivy if you have a valid maDMP file or not. I depends on avj [link] which is atool for validating json file a gainst specified schema.

* Import metadata from an maDMP 
* Export files as JSON in a RDA DMP Common Standard compliant syntax 

# Prerequisite
As mentioned in the Introduction the project serves as extension to Dataverse and therefore is dependent on a running instance of dataverse.
Also some configuration (e.g. creation of workflow and registratino of application as external tool) to dataverse has to be done manually over the api of dataverse (The configuration steps are explained in the next section).  
Further the following software has to be installed to compile and run the project:
* Java 8 or higher (Java 8 is also required by dataverse)
* Maven

# Running the project
* First you have to download the sources from https://github.com/Hido1994/madmp
* After that you can configure the application as described in the next section 
* After the configuration is finished the project can be compiled

# MaDMP - Workflow
In this section the general process of the workflow feature is described.

## Process Diagram
![Workflow](https://github.com/Hido1994/madmp/blob/master/docs/images/workflow.png?raw=true "MaDMP - Workflow process")

## Execution
1. The researcher navigates to a dataverse and creates a placeholder dataset.  
![CreateDs](https://github.com/Hido1994/madmp/blob/master/docs/images/create_dataset.png?raw=true "Create dataset")
2. In the next step the researcher uploads the machine actionable DMP to the placeholder dataset.  
![UploadDmp](https://github.com/Hido1994/madmp/blob/master/docs/images/upload_dmp.png?raw=true "Upload DMP")
3. Then the researcher press the `Publish` button  
This triggers the `PrePublishDataset` event and therefore a http request is send to our application.  
4. The application validates the uploaded maDMP and creates a new dataverse and datasets for the project.  
![DVaDS](https://github.com/Hido1994/madmp/blob/master/docs/images/dataverse_and_datasets.png?raw=true "Dataverse view")  
![DSView](https://github.com/Hido1994/madmp/blob/master/docs/images/dataset.png?raw=true "Dataset view")    
Hint: The placeholder dataset and the maDMP is deleted.
5. Now the researcher can navigate to the single datasets and upload the files of the experiment.  
![RUF](https://github.com/Hido1994/madmp/blob/master/docs/images/researcher_file_upload.png?raw=true "Researcher uploads files")    

* maDMP of Ahmad Alhirthani  
[DMP](https://github.com/Hido1994/madmp/blob/master/docs/dmp_dcc_11848870.pdf)  
[maDMP](https://github.com/Hido1994/madmp/blob/master/docs/exercise2_dmp_11848870.json)  

* Full maDMP for testing
[Full maDMP](https://github.com/Hido1994/madmp/blob/master/docs/testingmaDMP.json)  


* Schema used to validate
[Full schema](https://github.com/Hido1994/madmp/blob/master/src/main/resources/schema.json)  

# Contributers
* [Ahmad Alhirthani](https://orcid.org/0000-0003-0241-0268) <a href="https://orcid.org/0000-0003-0241-0268" target="orcid.widget" rel="noopener noreferrer" style="vertical-align:top;"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;" alt="ORCID iD icon">orcid.org/0000-0003-0241-0268</a>


# LICENCE
[MIT](https://github.com/Hido1994/madmp/blob/master/LICENSE.md)  




