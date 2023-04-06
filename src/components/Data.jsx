export const pages = [
    {
        id:1,
        name: "Home",
        path:"/home"
    }, 

      {
        id:3,
        name: "Drawings",
        path: "#"
    },
    {
        id:4,
        name: "Watercolor",
        path: "#"
    },
    {
        id:5,
        name: "Featured",
        path: "/featured"
    }, 
    {
        id: 6, 
        name: "Paintings", 
        path:"/paintings"
    }, 
    {
        id: 7, 
        name: "Upload Fotos",
        path:"/uploadImage"
    }
 
];

export const select =[
    {
        id:1,
        name: "Size",
        child: [
            {
                id:1,
                name: "small"                
            },
            {
                id:1,
                name: "medium"                
            },
            {
                id:1,
                name: "big"                
            }
        ]
    }, 
    {
        id:2,
        name: "Color",
        child: [
            {
                id:1,
                name: "red"                
            },
            {
                id:2,
                name: "blue"                
            },
            {
                id:3,
                name: "yellow"                
            },
            {
                id:4,
                name: "gray"                
            }
        ]
    },
    {
        id:3,
        name: "Price",
        child: [
            {
                id:1,
                name: "<500"                
            },
            {
                id:1,
                name: "501-1000"                
            },
            {
                id:1,
                name: ">1000"                
            },
        ]
    }

]
