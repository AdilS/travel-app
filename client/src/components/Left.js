import React, {Component} from 'react';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/style.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Left extends Component{

    render(){
        return (
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs"></i>Hotel Assets</a>
                                <ul className="sub-menu children dropdown-menu">                            
                                <li>
                                    <i className="fa fa-puzzle-piece"></i><a href="viewcategory">View Category</a></li>
                                    <li><i className="fa fa-id-badge"></i><a href="viewstarrating">View Star Rating</a></li>
                                    
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Customer</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-table"></i><a href="viewuser">View User</a></li>
                                   
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
           
        )
    }
}
export default Left;

/*

 <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                                    <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                                </ul>
                            </li>
        
                            <li className="menu-title">Icons</li>
        
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                                    <li><i className="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                                    <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                                    <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                                </ul>
                            </li>
        
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                                    <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                                </ul>
                            </li>
                            <li className="menu-title">Extras</li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                                    <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                                    <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
                                </ul>
                            </li>
*/