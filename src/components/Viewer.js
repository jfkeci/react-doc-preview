
import React from 'react'

import { DocumentViewer } from 'react-documents';

const Viewer = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fileUrl = urlParams.get('file');
    const viewer = urlParams.get('viewer');
    console.log(viewer, fileUrl)
    if (viewer != 'image') {
        if (fileUrl) {
            return (
                <div className="viewer">
                    <DocumentViewer
                        viewer={viewer}
                        url={fileUrl}
                    >
                    </DocumentViewer>
                </div>
            );
        } else { return <div>Set File</div> }
    } if (viewer) {
        if (fileUrl) {
            return (
                <img src={fileUrl}></img>
            );
        } else { return <div>Set File</div> }
    } else { return <div>Set Viewer</div> }
}

export default Viewer;