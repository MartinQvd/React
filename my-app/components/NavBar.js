import './navbar.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const navbar = () => {
  return(
    <div classname= 'navbar-primary'>
        <img src="/assets/logo.svg" alt="logo"/>
        <h1>90Vintage</h1>
        <ul>
            <li><button>inicio</button></li>
            <li><button>Productos</button></li>
            <li><buttom>About Us</buttom></li>
            <li><button>Contacto</button></li>
        </ul>
    
    <div>
      <shoppingCartIcon/>
    </div>
    </div>

  )
}

export default navbar