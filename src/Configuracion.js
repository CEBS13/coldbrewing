import React, { Component } from 'react';


// The editor core
import Editor, { Editable, createEmptyState } from "@react-page/core";
import "@react-page/core/lib/index.css"; // we also want to load the stylesheets

// Require our ui components (optional). You can implement and use your own ui too!
import EditorUI from "@react-page/ui";
import BottomToolbar from "@react-page/ui";
import DisplayModeToggle from '@react-page/ui';

import "@react-page/ui/lib/index.css";


// Load some exemplary plugins:
import slate from "@react-page/plugins-slate"; // The rich text area plugin
import "@react-page/plugins-slate/lib/index.css"; // Stylesheets for the rich text area plugin
import parallax from "@react-page/plugins-parallax-background"; // A plugin for parallax background images
import "@react-page/plugins-parallax-background/lib/index.css"; // Stylesheets for parallax background images
import image from  "@react-page/plugins-image";
import video from  "@react-page/plugins-video";
import divider from  "@react-page/plugins-divider";
import spacer from  "@react-page/plugins-spacer";
import background from "@react-page/plugins-background";





// react-tap-event-plugin is required by material-ui which is used by ory-editor-ui so we need to call it here


// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
    content: [slate(), image, spacer, divider, video], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
    layout: [parallax({ defaultPlugin: slate() })] // Define plugins for layout cells
  };
  
  // Creates an empty editable
  const content = createEmptyState();
  
  // Instantiate the editor
  const editor = new Editor({
    plugins,
    // pass the content state - you can add multiple editables here
    editables: [content]
  });



class Configuracion  extends Component {
    render() {
        return (
            <div style={{height: "100vh"}}>
                

                {/* Content area */}
                <Editable editor={editor} id={content.id} defaultPlugin={slate} />    

                {/*  Default user interface  */}        
                <EditorUI editor={editor} />
                <BottomToolbar editor={editor}/>
                <DisplayModeToggle editor={editor}/>

            </div>
            
        );
    }
}

export default Configuracion;