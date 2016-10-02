import {NgModule}                       from '@angular/core';
import {BrowserModule}                  from '@angular/platform-browser';
import {ReactiveFormsModule}            from '@angular/forms';
import {FormsModule}                    from '@angular/forms';
import {HttpModule}                     from '@angular/http';
import {routing, appRoutingProviders}   from './app.routing';
import {AppComponent}                   from './app.component';
import {ContactForm}                    from 'modules/contact-form/contact-form';
import {CountyProfile}                  from 'modules/county-profile/county-profile';
import {Modal}                          from 'modules/modal/modal';
import {ModalService}                   from 'modules/modal/modal-service';
import {ReactiveForm}                   from 'modules/reactive-form/reactive-form';
import {ReactiveFormInput}              from 'modules/reactive-form-input/reactive-form-input';
import {Autocomplete}                   from 'modules/autocomplete/autocomplete';
import {Grid}                           from 'modules/grid/grid';
import {ClassEditor}                    from 'modules/class-editor/class-editor';
import {ModeledForm}                    from 'modules/modeled-form/modeled-form';
import {FormInput}                      from 'modules/form-input/form-input';
import {DataService}                    from 'modules/data-service/data-service';
import {Slimscroll}		                  from 'modules/slimscroll/slimscroll';
import {RPWDashboard}                   from 'modules/rpw-dashboard/rpw-dashboard';
import {ArticleForm}                    from 'modules/article-form/article-form';
import {ContactProfile}                 from 'modules/contact-profile/contact-profile';
import {UploadManager}                  from 'modules/upload-manager/upload-manager';
import {ClassForm}                      from 'modules/class-form/class-form';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  exports:  [
    CountyProfile,
    ReactiveForm,
    ReactiveFormInput,
    Modal,
    Autocomplete,
    Grid,
    ClassEditor,
    ModeledForm,
    FormInput,
    Slimscroll,
    RPWDashboard,
    ArticleForm,
    ContactProfile,
    UploadManager,
    ClassForm
  ],
  declarations: [
    AppComponent,
    ContactForm,
    CountyProfile,
    ReactiveForm,
    ReactiveFormInput,
    Modal,
    Autocomplete,
    Grid,
    ClassEditor,
    ModeledForm,
    FormInput,
    Slimscroll
    RPWDashboard,
    ArticleForm,
    ContactProfile,
    UploadManager,
    ClassForm
  ],
  providers: [
    appRoutingProviders,
    ModalService,
    DataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }