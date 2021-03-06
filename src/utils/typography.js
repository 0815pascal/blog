import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "p>code": {
      fontSize: '.9rem',
      whiteSpace: 'pre-wrap',
      padding: '.1rem .3rem',
      borderRadius: '.35rem',
      backgroundColor: '#f6f8fb', 
      lineHeight: 1.7,
      border: '1px solid #d6d9de'
    },
    "#topReactangle":{
      widht: '100%',
      borderTop: '6px solid #336EF5'
    },
    "footer": {
      margin: '0 !important',
      display: 'flex'
    },
      "footer>div":{
        textAlign: 'left',
        fontFamily: '"Inter","Open Sans", sans-serif',
        display: 'flex'
      },
      "#footerImage":{
        marginLeft: 'auto',
        alignSelf: 'center',
        filter: 'drop-shadow(4px 3px 3px #AAAAAA)',
        
      },
        "#footerImage a":{
          boxShadow: 'none'
        }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
