import React, {useRef, useEffect} from 'react';
import PageHolder from '../components/pageHolder'

const Test = () => {
    // const sections = useRef([])
    // useEffect(() => {
    //     sections.current = document.querySelectorAll('div.scroll-section')
    //     sections.current.forEach((node) => console.log(node))
    // }, []);
    // console.log(Array.from(sections.current))

    return (
        <PageHolder>
            {/* {Array.from(sections.current).map((item) => <button onClick={() => item.scrollIntoView()}>{item.id}</button>)} */}
            <div class='scroll-section' id='hello-1' style={{height: '1500px', backgroundColor: 'yellow'}}>hello</div>
            <div class='scroll-section' id='goodbye-2' style={{height: '1500px', backgroundColor: 'green'}}>goodbye</div>
        </PageHolder>
    );
}

export default Test;
