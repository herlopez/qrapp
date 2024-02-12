import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            React QR Code 2.0

            <grid container spacing={6}>
                <grid item xs={6}>
                    <Link to="/qr_generator">
                    <button variant="contained" size="large" color="primary">
                        <icon 
                        style={{padding:10}}
                        path={mdiQrcode}
                        title="QR Generator"
                        size={10}
                        color="white"
                        />
                    </button>
                    </Link>
                </grid>
                <grid item xs={6}>
                    <Link to="/qr_scanner">
                    <button variant="contained" size="large" color="primary">
                        <icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </button>
                    </Link>
                </grid>
            </grid>
        
        </div>
    );
  }
  
  export default Home;
  