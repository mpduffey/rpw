import {Routes, RouterModule} from '@angular/router';
import {RPWDashboard}					from 'modules/rpw-dashboard/rpw-dashboard';
import {ArticleForm}					from 'modules/article-form/article-form';
import {ContactForm}					from 'modules/contact-form/contact-form';
import {ContactProfile}				from 'modules/contact-profile/contact-profile';
import {UploadManager}				from 'modules/upload-manager/upload-manager';
import {CountyProfile}				from 'modules/county-profile/county-profile';
import {ClassEditor}					from 'modules/class-editor/class-editor';
import {ClassForm}						from 'modules/class-form/class-form';

export const appRoutes: Routes = [
  {path: '', component: RPWDashboard, data: {label: false}},
  {path: 'rpw-dashboard', component: RPWDashboard, data: {label: "RPW Dashboard"}},
	{path: 'article-form', component: ArticleForm, data: {label: "Add Article"}},
	{path: 'contact-form', component: ContactForm, data: {label: "Contact Form"}},
	{path: 'contact-profile/:id', component: ContactProfile, data: {label: "Contact Profile"}},
	{path: 'upload', component: UploadManager, data: {label: "Upload Manager"}},
	{path: 'county/:id', component: CountyProfile, data: {label: "County Profile"}},
	{path: 'class', component: ClassEditor, data: {label: "Class Editor"}},
	{path: 'class-form', component: ClassForm, data: {label: "Class Form"}}
];
	 
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);