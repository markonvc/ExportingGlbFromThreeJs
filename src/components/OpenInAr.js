import React from 'react';
import ExportGlb from '../3d/3dUtils/ExportGlbHelper';
import Store from '../store/Store';

function OpenInAr() {

    function exportGLBRunMv() {
        ExportGlb.exportglbFromScene(Store.scene)
    }

    return (
        <div>
            <button onClick={exportGLBRunMv}>Open in AR</button>
        </div>
    );
}

export default OpenInAr;