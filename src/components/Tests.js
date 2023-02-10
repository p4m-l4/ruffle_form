import React from "react";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Test from "./Test";

const Tests = () => {
    return ( 
        <>
            <div style={{paddingLeft: 400, paddingRight: 400, paddingTop: 100, paddingBottom: 100}}>
                <h4>Tests</h4>
                <MDBListGroup  className="overflow-auto" vertical verticalSize='lg' style={{height: 500, width: 1000}}>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                    <Test name="Maths" id="1"/>
                    <Test name="Maths 2" id="2"/>
                </MDBListGroup>
                </div>
        </>
     );
}
 
export default Tests;