import ItemCount from './ItemCount';

const ItemDetail = ({id, title, description, price, image}) => {
    
    return (
    <div className="cards d-flex align-items-center d-flex justify-content-evenly">    
            <div className="card col-6 col-sm-3">
                <img src='./assets/apple-iphone-14.jpg' alt=''/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <hr/>
                    <ItemCount />
                </div>
            </div>
    </div>
  );
}

export default ItemDetail;