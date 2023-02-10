import React from "react";
import { MDBListGroupItem } from 'mdb-react-ui-kit';

const Test = (
    props
) => {
    return ( 
        <>
            <div>
                <MDBListGroupItem href={`/${props.id}`}>{props.name}</MDBListGroupItem>
            </div>
        </>
     );
}
 
export default Test;