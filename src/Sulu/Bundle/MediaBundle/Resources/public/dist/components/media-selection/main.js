define(["sulumedia/collection/collections","sulumedia/model/collection"],function(a,b){"use strict";var c={eventNamespace:"sulu.media-selection",thumbnailKey:"thumbnails",thumbnailSize:"50x50",resultKey:"media",dataAttribute:"media-selection",dataDefault:{displayOption:"top",ids:[]},hideConfigButton:!0,translations:{noContentSelected:"media-selection.nomedia-selected",addImages:"media-selection.add-images",choose:"public.choose",collections:"media-selection.collections",upload:"media-selection.upload-new",collection:"media-selection.upload-to-collection",createNewCollection:"media-selection.create-new-collection",newCollection:"media-selection.new-collection"}},d={table:{itemId:"table",name:"table"},thumbnailSmall:{itemId:"small-thumbnails",name:"thumbnail",thViewOptions:{large:!1,unselectOnBackgroundClick:!1}},thumbnailLarge:{itemId:"big-thumbnails",name:"thumbnail",thViewOptions:{large:!0,unselectOnBackgroundClick:!1}}},e={lastVisitedCollectionKey:"last-visited-collection",listViewStorageKey:"mediaOverlayListView"},f=function(){return i.call(this,"record-selected")},g=function(){return i.call(this,"record-deselected")},h=function(){return i.call(this,"data-changed")},i=function(a){return this.options.eventNamespace+"."+(this.options.instanceName?this.options.instanceName+".":"")+a},j={mediaSelection:function(a){return['<div class="media-selection-overlay">','   <div class="media-selection-overlay-navigation-container pull-left"></div>','   <div class="media-selection-overlay-content">','       <div class="fa-times media-selection-overlay-close"></div>','       <div class="media-selection-overlay-dropzone-container"></div>','       <div class="media-selection-overlay-header" ondragstart="return false;">','           <div class="media-selection-overlay-toolbar-container"></div>','           <div id="selected-images-count" class="media-selection-overlay-selected-info"></div>',"       </div>",'       <div class="media-selection-overlay-content-area" ondragstart="return false;">','           <div class="media-selection-overlay-content-title">',a.contentDefaultTitle,"</div>",'           <div class="media-selection-overlay-datagrid-container"></div>',"       </div>","   </div>","</div>"].join("")},mediaSelectedInfo:function(a){return a.selectedCounter+" "+a.selectedImagesLabel},contentItem:function(a,b){return['   <img src="',b["50x50"],'"/>','   <span class="title">',a,"</span>"].join("")}},k=function(a){return"#"+this.options.ids[a]},l=function(){var a=this.$find(k.call(this,"loader"));a.length&&this.sandbox.start([{name:"loader@husky",options:{el:a,size:"100px",color:"#cccccc"}}])},m=function(){this.sandbox.stop(k.call(this,"loader"))},n=function(){this.sandbox.dom.scrollAnimate(this.sandbox.dom.height(".media-selection-overlay-datagrid-container"),".media-selection-overlay-content")},o=function(a){for(var b=-1,c=a.length;++b<c;)a[b].selected=!0;this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".records.add",a,n.bind(this)),this.sandbox.emit("husky.data-navigation."+this.options.instanceName+".collections.reload")},p=function(a){var b,c=this.sandbox.translate("media-selection.overlay.all-images");a?(b=a.id,c=a.title,this.sandbox.emit("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".item.show","add"),this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".enable")):(this.sandbox.emit("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".item.hide","add"),this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".disable")),this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".url.update",{collection:b,page:1}),s.call(this,b),this.$el.find(".media-selection-overlay-content-title").html(c)},q=function(a){var b="",c="",d=(a.ids||[]).length;d&&(c=1===d?this.sandbox.translate("media-selection.overlay.selected-image-label"):this.sandbox.translate("media-selection.overlay.selected-images-label"),b=j.mediaSelectedInfo({selectedCounter:d,selectedImagesLabel:c})),this.$el.find("#selected-images-count").html(b),this.sandbox.emit(h.call(this))},r=function(){this.sandbox.on(this.DISPLAY_OPTION_CHANGED(),function(a){x.call(this,{displayOption:a},!1)},this),this.sandbox.on(this.DATA_RETRIEVED(),function(a){var b=[];this.sandbox.util.foreach(a,function(a){b.push(a.id)}.bind(this)),x.call(this,{ids:b},!1)},this),this.sandbox.on("husky.tabs.overlay."+this.options.instanceName+".add.initialized",function(){l.call(this),this.collections.fetchSorted("title",{success:function(a){this.collectionArray=a.toJSON(),m.call(this),t.call(this)}.bind(this)})}.bind(this)),this.sandbox.on("husky.select."+this.options.instanceName+".selected.item",s.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.select",function(a){this.sandbox.emit(f.call(this),a)}.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.deselect",function(a){this.sandbox.emit(g.call(this),a)}.bind(this)),this.sandbox.on("husky.data-navigation."+this.options.instanceName+".select",p.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.table",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","table"),this.sandbox.sulu.saveUserSetting(e.listViewStorageKey,"table")}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-small",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","thumbnail",{large:!1}),this.sandbox.sulu.saveUserSetting(e.listViewStorageKey,"thumbnailSmall")}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-large",function(){this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".view.change","thumbnail",{large:!0}),this.sandbox.sulu.saveUserSetting(e.listViewStorageKey,"thumbnailLarge")}.bind(this)),this.sandbox.on("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".initialized",function(){this.sandbox.emit("husky.toolbar.media-selection-ovelay."+this.options.instanceName+".item.mark",d[this.listView].itemId)}.bind(this)),this.sandbox.on("sulu.header.back",function(){this.sandbox.emit("sulu.media.collections.list")}.bind(this)),this.sandbox.on("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".files-added",function(a){this.sandbox.emit("sulu.labels.success.show","labels.success.media-upload-desc","labels.success"),o.call(this,a)}.bind(this)),this.sandbox.on("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".add",function(){this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".open-data-source")}.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.select",function(a,b){var c=this.getData(),d=c.ids.indexOf(a);d>-1||(c.ids.push(a),this.setData(c,!1),this.addItem(b),q.call(this,c))}.bind(this)),this.sandbox.on("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".item.deselect",function(a){var b=this.getData(),c=b.ids.indexOf(a);c>-1&&b.ids.splice(c,1),this.setData(b,!1),this.removeItemById(a),q.call(this,b)}.bind(this)),this.sandbox.on("husky.overlay.dropzone-media-selection-ovelay."+this.options.instanceName+".opened",function(){this.$el.find(".media-selection-overlay-container").addClass("dropzone-overlay-opened")}.bind(this)),this.sandbox.on("husky.overlay.dropzone-media-selection-ovelay."+this.options.instanceName+".closed",function(){this.$el.find(".media-selection-overlay-container").removeClass("dropzone-overlay-opened")}.bind(this)),this.sandbox.on("husky.overlay."+this.options.instanceName+".add.opened",function(){var a=this.getData(),b=a.ids||[];this.sandbox.emit("husky.datagrid.media-selection-ovelay."+this.options.instanceName+".selected.update",b),q.call(this,a)}.bind(this))},s=function(a){this.uploadCollection=a,this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".change-url","/admin/api/media?collection="+a)},t=function(){this.sandbox.start([{name:"dropzone@husky",options:{el:k.call(this,"dropzone"),url:"/admin/api/media?collection="+this.uploadCollection,method:"POST",paramName:"fileVersion",showOverlay:!1,instanceName:"media-selection-ovelay."+this.options.instanceName,afterDropCallback:u.bind(this),keepFilesAfterSuccess:!0}}])},u=function(){var a=this.sandbox.data.deferred();return"new"===this.uploadCollection?this.newCollectionId?(this.uploadCollection=this.newCollectionId,s.call(this,this.uploadCollection),a.resolve()):(this.newCollection.set({title:v.call(this)}),this.newCollection.save(null,{success:function(b){b=b.toJSON(),this.newCollectionId=b.id,s.call(this,b.id),this.collectionArray.push(b),a.resolve()}.bind(this),error:function(){this.sandbox.logger.log("Error while saving collection")}.bind(this)})):a.resolve(),a.promise()},v=function(){var a=this.sandbox.translate(this.options.translations.newCollection),b=0;return this.sandbox.util.foreach(this.collectionArray,function(c){-1!==c.title.indexOf(a)&&b++}.bind(this)),b>0&&(a=a+" ("+b+")"),a},w=function(){var a=this.sandbox.dom.createElement("<div/>");this.sandbox.dom.append(this.$el,a),this.listView=this.sandbox.sulu.getUserSetting(e.listViewStorageKey)||"thumbnailSmall",this.sandbox.start([{name:"overlay@husky",options:{triggerEl:this.$addButton,draggable:!0,dragTrigger:".media-selection-overlay-navigation-container",removeOnClose:!1,el:a,container:this.$el,cssClass:"media-selection-overlay-container",instanceName:this.options.instanceName+".add",skin:"wide",supportKeyInput:!1,slides:[{title:this.sandbox.translate(this.options.translations.addImages),data:j.mediaSelection({contentDefaultTitle:this.sandbox.translate("media-selection.overlay.all-images")})}]}}]),this.sandbox.once("husky.overlay."+this.options.instanceName+".add.opened",function(){this.$el.on("click",".media-selection-overlay-close",function(){this.sandbox.emit("husky.overlay."+this.options.instanceName+".add.close")}.bind(this)),this.sandbox.start([{name:"data-navigation@husky",options:{el:this.$el.find(".media-selection-overlay-navigation-container"),resultKey:"collections",showAddButton:!1,rootUrl:"/admin/api/collections?sortBy=title",url:"/admin/api/collections?sortBy=title",nameKey:"title",instanceName:this.options.instanceName,globalEvents:!1,translates:{noData:"",title:this.sandbox.translate("navigation.media.collections"),addButton:"",search:this.sandbox.translate("navigation.media.collections.search")}}}]),this.sandbox.sulu.initListToolbarAndList.call(this,"mediaOverlay",[{name:"id",translation:"public.id",disabled:!0,"default":!1,sortable:!0,type:"",width:"50px",minWidth:"",editable:!1,"class":""},{name:"thumbnails",translation:"media.media.thumbnails",disabled:!1,"default":!0,sortable:!0,type:"thumbnails",width:"",minWidth:"",editable:!1,"class":""},{name:"title",translation:"public.title",disabled:!1,"default":!1,sortable:!0,type:"title",width:"",minWidth:"",editable:!1,"class":""},{name:"size",translation:"media.media.size",disabled:!1,"default":!0,sortable:!0,type:"bytes",width:"",minWidth:"",editable:!1,"class":""}],{el:this.$el.find(".media-selection-overlay-toolbar-container"),instanceName:"media-selection-ovelay."+this.options.instanceName,showTitleAsTooltip:!1,template:[{id:"add",icon:"plus-circle",title:this.sandbox.translate("media-selection.list-toolbar.upload-info"),hidden:!0,callback:function(){this.sandbox.emit("husky.dropzone.media-selection-ovelay."+this.options.instanceName+".open-data-source")}.bind(this)},{id:"change",icon:"th-large",dropdownOptions:{markSelected:!0},dropdownItems:[{id:"small-thumbnails",title:this.sandbox.translate("sulu.list-toolbar.small-thumbnails"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-small")}.bind(this)},{id:"big-thumbnails",title:this.sandbox.translate("sulu.list-toolbar.big-thumbnails"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.thumbnail-large")}.bind(this)},{id:"table",title:this.sandbox.translate("sulu.list-toolbar.table"),callback:function(){this.sandbox.emit("sulu.list-toolbar.media-selection-ovelay."+this.options.instanceName+".change.table")}.bind(this)}]}],inHeader:!1},{el:this.$el.find(".media-selection-overlay-datagrid-container"),url:"/admin/api/media?orderBy=media.changed&orderSort=DESC",view:d[this.listView].name,resultKey:"media",instanceName:"media-selection-ovelay."+this.options.instanceName,preselected:this.getData().ids,sortable:!1,viewSpacingBottom:180,viewOptions:{thumbnail:d[this.listView].thViewOptions||{}},paginationOptions:{dropdown:{verticalAlignment:"top"}}}),this.sandbox.start([{name:"dropzone@husky",options:{el:this.$el.find(".media-selection-overlay-dropzone-container"),url:"/admin/api/media",method:"POST",paramName:"fileVersion",instanceName:"media-selection-ovelay."+this.options.instanceName,dropzoneEnabled:!1,cancelUploadOnOverlayClick:!0}}])}.bind(this))},x=function(a,b){var c=this.getData();for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);this.setData(c,b)};return{type:"itembox",initialize:function(){this.options=this.sandbox.util.extend(!0,{},c,this.options);var d=this.getData();this.collections=new a,this.newCollection=new b,this.collectionArray=null,this.newCollectionId=null,this.options.ids={container:"media-selection-"+this.options.instanceName+"-container",addButton:"media-selection-"+this.options.instanceName+"-add",configButton:"media-selection-"+this.options.instanceName+"-config",displayOption:"media-selection-"+this.options.instanceName+"-display-option",content:"media-selection-"+this.options.instanceName+"-content",chooseTab:"media-selection-"+this.options.instanceName+"-choose-tab",uploadTab:"media-selection-"+this.options.instanceName+"-upload-tab",loader:"media-selection-"+this.options.instanceName+"-loader",collectionSelect:"media-selection-"+this.options.instanceName+"-collection-select",dropzone:"media-selection-"+this.options.instanceName+"-dropzone"},this.uploadCollection=null,r.call(this),this.render(),d.displayOption&&this.setDisplayOption(d.displayOption),w.call(this)},isDataEmpty:function(a){return this.sandbox.util.isEmpty(a.ids)},getUrl:function(a){var b=-1===this.options.url.indexOf("?")?"?":"&";return[this.options.url,b,this.options.idsParameter,"=",(a.ids||[]).join(",")].join("")},getItemContent:function(a){return j.contentItem(a.title,a.thumbnails)},sortHandler:function(a){var b=this.getData();b.ids=a,this.setData(b,!1)},removeHandler:function(a){for(var b=this.getData(),c=-1,d=b.ids.length;++c<d;)if(b.ids[c]===a){b.ids.splice(b.ids.indexOf(a),1);break}this.sandbox.emit(g.call(this),a),this.setData(b,!1)}}});