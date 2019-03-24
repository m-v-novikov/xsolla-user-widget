import React, { useState, useEffect } from "react";

export default function DynamicImport({path, props, isShowLoading = true}){

    const [ Component, setComponent] = useState({module: null});
    let isCancelled = false;

    useEffect(() => {
        import(`../../${path}`)
          .then(module => {
              if(!isCancelled){
                  setComponent({ module : module.default})
              }
          });

        return () => {
            isCancelled = true;
        }
    }, []);

    if(!Component.module) return <div className="content-container pt-20">Loading module...</div>;
    const DynamicComponent = Component.module;
    return <DynamicComponent {...props}/>;


    // const LoadingModule = () => (isShowLoading ? <div className="content-container pt-20">Loading module...</div> : null);
    // const [ Component, setComponent] = useState({module: null});
    // let isCancelled = false;
    //
    // useEffect(() => {
    //     import(`../../${path}`)
    //         .then(module => {
    //             if(!isCancelled){
    //                 setComponent({ module : module.default})
    //             }
    //         });
    //
    //     return () => {
    //         isCancelled = true;
    //     }
    // }, []);
    //
    // if(!Component.module) { return <LoadingModule/> }
    // const DynamicComponent = Component.module;
    // return <DynamicComponent {...props}/>;
}
