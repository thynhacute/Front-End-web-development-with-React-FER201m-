import React, { Component } from "react";

import {
    Media,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class Menu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dishes: [
    //             {
    //               id: 0,
    //               name:'Uthappizza',
    //               image: 'assets/images/uthappizza.png',
    //               category: 'mains',
    //               label:'Hot',
    //               price:'4.99',
    //               description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
    //            {
    //               id: 1,
    //               name:'Zucchipakoda',
    //               image: 'assets/images/zucchipakoda.png',
    //               category: 'appetizer',
    //               label:'',
    //               price:'1.99',
    //               description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
    //            {
    //               id: 2,
    //               name:'Vadonut',
    //               image: 'assets/images/vadonut.png',
    //               category: 'appetizer',
    //               label:'New',
    //               price:'1.99',
    //               description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
    //            {
    //               id: 3,
    //               name:'ElaiCheese Cake',
    //               image: 'assets/images/elaicheesecake.png',
    //               category: 'dessert',
    //               label:'',
    //               price:'2.99',
    //               description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
    //            ],
    //     };
    // }

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderDishDetail(dish) {
        if (dish != null)
            return (
                <Card>
                    {dish.comments.map((items) => {
                        if (dish.id == items.id) {
                            return (
                                <div>
                                    <h1>{dish.name} Detail !!</h1>
                                    <p>{items.comment}</p>
                                    <p>{items.author}</p>
                                    <p>{items.date}</p>
                                </div>
                            );
                        }
                    })}
                </Card>
            );
        else return <div></div>;
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="50%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{menu}</div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDishDetail(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

    // render() {
    //     const menu = this.state.dishes.map((dish) => {
    //         return (
    //             <div key={dish.id} className="col-12 mt-5">
    //                 <Media tag="li">
    //                     <Media left middle>
    //                         <Media object src={dish.image} alt={dish.name} />
    //                     </Media>
    //                     <Media body className="ml-5">
    //                         <Media heading>{dish.name}</Media>
    //                         <p>{dish.description}</p>
    //                     </Media>
    //                 </Media>
    //             </div>
    //         );
    //     });

    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <Media list>
    //                     {menu}
    //                 </Media>
    //             </div>
    //         </div>
    //     );
    // }
}

export default Menu;
