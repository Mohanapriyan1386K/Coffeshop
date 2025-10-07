// Centralized route config for sidebar + routing
// Each child has: path (relative to root), title, component

// Import pages
import Shipping from './homescreen/orders/Shipping.jsx';
import Orders from './homescreen/orders/Orders.jsx';
import Tracking from './homescreen/orders/Tracking.jsx';
import Delivery from './homescreen/orders/Delivery.jsx';

import Categories from './homescreen/product-masters/Categories.jsx';
import ProductPricing from './homescreen/product-masters/ProductPricing.jsx';
import Products from './homescreen/product-masters/Products.jsx';
import HomepageProducts from './homescreen/product-masters/HomepageProducts.jsx';
import QuantitySize from './homescreen/product-masters/QuantitySize.jsx';

import Admin from './homescreen/manage-accounts/Admin.jsx';
import Customers from './homescreen/manage-accounts/Customers.jsx';
import SalesExecutive from './homescreen/manage-accounts/SalesExecutive.jsx';
import Accounts from './homescreen/manage-accounts/Accounts.jsx';

import Franchise from './homescreen/branches/Franchise.jsx';
import Branches from './homescreen/branches/Branches.jsx';
import Distributor from './homescreen/branches/Distributor.jsx';
import Overseas from './homescreen/branches/Overseas.jsx';

import OneTimePurchase from './homescreen/subscription/OneTimePurchase.jsx';
import Monthly from './homescreen/subscription/Monthly.jsx';
import Prepaid from './homescreen/subscription/Prepaid.jsx';

import Complaints from './homescreen/enquiries-queries/Complaints.jsx';

import Blogs from './homescreen/about/Blogs.jsx';
import CertificatesAchievementsAwards from './homescreen/about/CertificatesAchievementsAwards.jsx';
import Reviews from './homescreen/about/Reviews.jsx';

import HomepageBanners from './homescreen/cms/HomepageBanners.jsx';
import Gallery from './homescreen/cms/Gallery.jsx';
import CustomerSupport from './homescreen/cms/CustomerSupport.jsx';
import HomepageSalesProducts from './homescreen/cms/HomepageSalesProducts.jsx';
import GiftManners from './homescreen/cms/GiftManners.jsx';

const routes = [
  {
    key: 'orders',
    title: 'Orders',
    children: [
      { path: 'orders/shipping', title: 'Shipping', component: Shipping },
      { path: 'orders/orders', title: 'Orders', component: Orders },
      { path: 'orders/tracking', title: 'Tracking', component: Tracking },
      { path: 'orders/delivery', title: 'Delivery', component: Delivery },
    ],
  },
  {
    key: 'product-masters',
    title: 'Product Masters',
    children: [
      { path: 'product-masters/categories', title: 'Categories', component: Categories },
      { path: 'product-masters/product-pricing', title: 'Product Pricing', component: ProductPricing },
      { path: 'product-masters/products', title: 'Products', component: Products },
      { path: 'product-masters/homepage-products', title: 'Homepage Products', component: HomepageProducts },
      { path: 'product-masters/quantity-size', title: 'Quantity & Size', component: QuantitySize },
    ],
  },
  {
    key: 'manage-accounts',
    title: 'Manage Accounts',
    children: [
      { path: 'manage-accounts/admin', title: 'Admin', component: Admin },
      { path: 'manage-accounts/customers', title: 'Customers', component: Customers },
      { path: 'manage-accounts/sales-executive', title: 'Sales Executive', component: SalesExecutive },
      { path: 'manage-accounts/accounts', title: 'Accounts', component: Accounts },
    ],
  },
  {
    key: 'branches',
    title: 'Branches',
    children: [
      { path: 'branches/franchise', title: 'Franchise', component: Franchise },
      { path: 'branches/branches', title: 'Branches', component: Branches },
      { path: 'branches/distributor', title: 'Distributor', component: Distributor },
      { path: 'branches/overseas', title: 'Overseas', component: Overseas },
    ],
  },
  {
    key: 'subscription',
    title: 'Subscription',
    children: [
      { path: 'subscription/one-time-purchase', title: 'One Time Purchase', component: OneTimePurchase },
      { path: 'subscription/monthly', title: 'Monthly', component: Monthly },
      { path: 'subscription/prepaid', title: 'Prepaid', component: Prepaid },
    ],
  },
  {
    key: 'enquiries-queries',
    title: 'Enquiries & Queries',
    children: [
      { path: 'enquiries-queries/complaints', title: 'Complaints', component: Complaints },
    ],
  },
  {
    key: 'about',
    title: 'About',
    children: [
      { path: 'about/blogs', title: 'Blogs', component: Blogs },
      { path: 'about/certificates-achievements-awards', title: 'Certificates & Achievements', component: CertificatesAchievementsAwards },
      { path: 'about/reviews', title: 'Reviews', component: Reviews },
    ],
  },
  {
    key: 'cms',
    title: 'CMS',
    children: [
      { path: 'cms/homepage-banners', title: 'Homepage Banners', component: HomepageBanners },
      { path: 'cms/gallery', title: 'Gallery', component: Gallery },
      { path: 'cms/customer-support', title: 'Customer Support', component: CustomerSupport },
      { path: 'cms/homepage-sales-products', title: 'Homepage Sales Products', component: HomepageSalesProducts },
      { path: 'cms/gift-manners', title: 'Gift Manners', component: GiftManners },
    ],
  },
];

export default routes;
