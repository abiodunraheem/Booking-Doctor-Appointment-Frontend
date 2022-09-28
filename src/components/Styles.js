const SideBarStyle ={
    imgdiv : {
        display: "flex",
        minWidth: "210px",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#eee",
    },

    linkDiv : {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "flex-start",
        listStyle: "none",
        textTransformation: "uppercase",
        padding: "0",
    },

    liItem : {
       fontWeight: "500",
       fontSize: "20px",
    }, 


    linkItem : {
        color: "#000",
        textDecoration: "none",
        hover: {
            color: "red",
            textDecoration: "none",
        }
    },
    };

    const FooterStyle = {
        footerSec : {
          display: "flex",
          justifyContent: "space around",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px"
        },

        ulIcons : {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap :"10px",
          listStyle: "none",
          padding: "0"
        },

        liIcon : {
          color: "#000",
          fontSize: "19px"
        },

        copyrightDiv : {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },

        copyright : {
         color: "#000",
         fontSize: "12px",
         fontWeight: "500"
        }
    }

    const dotStyle = {
        color: '#000',
        fontSize: "18px",
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "-15px"
      };

      const materialImage = {
            borderRadius: 50,
            width: 170,
            height: 170,
            margin: "auto",
            transition: "transform .5s",
        "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "4px 4px 10px gray"
          },
      }

      const materialName ={
        fontSize: "18px",
        textAlign: "center",
        marginLeft: "-15px",
      }

  export  {FooterStyle, SideBarStyle, dotStyle, materialName, materialImage};