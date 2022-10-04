//MNS - Perfex CRM v1.1.2
//MNS - App corporativo (mns)
//perfex@meunegociosocial.com

const config = {
    //Main Application URL
    'websiteUrl' : 'https://crm.ellasbubbles.com/admin/authentication',

    //Application Name
    'appName' : 'Ella - CRM',

    //Application window width and height
    'width' : 1280,
    'height' : 800,
    'minWidth' : 1280,
    'minHeight' : 800,

    // loading screen color
    'backgroundColor': '#4868cf',

    // default - Results in the standard gray opaque Mac title bar.
    // hidden - Results in a hidden title bar and a full size content window, yet the title bar still has the standard window controls ("traffic lights") in the top left.
    // hiddenInset - Results in a hidden title bar with an alternative look where the traffic light buttons are slightly more inset from the window edge.
    // customButtonsOnHover Boolean (optional) - Draw custom close, and minimize buttons on macOS frameless windows. These buttons will not display unless hovered over in the top left of the window. These custom buttons prevent issues with mouse events that occur with the standard window toolbar buttons. Note: This option is currently experimental.
    'titleBarStyle': 'hidden', 

    //Hide elements by ID
    'hideElementsId' : [],

    //Hide elements by Class
    'hideElementsClass' : [],

}

module.exports = config
