(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0585":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("456d");var a=r(i("75fc"));i("ac6a"),i("386d"),i("96cf");var n=r(i("3b8d"));i("6b54");var o=r(i("bd86")),c=i("c4c8"),s=r(i("b9cb")),d=r(i("4d0f")),l=i("2b74"),u=i("2f62");function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){(0,o.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={components:{rfSearchBar:s.default,rfAttrContent:d.default},data:function(){return{hotSearchDefault:"请输入关键字",showCategoryIndex:0,categoryList:[],specClass:"none",productDetail:{},search:{},cateTop:{},loading:!0,styleCateType:this.$mSettingConfig.styleCateType,errorImage:this.$mAssetsPath.errorImage,currentCateId:"",categoryProductList:[],price:"",total_sales:"",loadingType:"more",page:1,moneySymbol:this.moneySymbol,productLoading:!0,currentSecondCategoryList:[],categoryInvertedIndex:0}},computed:{bottom:function(){var e=0;return e=90,e}},filters:{filterTotalSales:function(e){return e>1e4&&(e="".concat((e/1e4).toFixed(2),"w")),e}},onLoad:function(){this.initData()},methods:p({moveHandle:function(){}},(0,u.mapMutations)(["setCartNum"]),{handleCategoryInvertedChange:function(e,t){this.categoryInvertedIndex=t,this.currentCateId=e.id,this.price="",this.total_sales="",this.page=1,this.categoryProductList=[],this.getProductList()},stopPrevent:function(){},toggleSpec:function(e){var t=this;if(0!==parseInt(e.status,10))if("show"===this.specClass){if(this.specClass="hide",0===e.stock)return void this.$mHelper.toast("库存不足");if("1"===e.type.toString())this.handleCartItemCreate(e.skuId,e.cartCount);else if("2"===e.type.toString()){var i={},r={};r.sku_id=e.skuId,r.num=e.cartCount,"2"===this.productDetail.point_exchange_type.toString()||"4"===this.productDetail.point_exchange_type.toString()||"3"===this.productDetail.point_exchange_type.toString()&&this.isPointExchange?i.type="point_exchange":i.type="buy_now",i.data=JSON.stringify(r),this.navTo("/pages/order/create/order?data=".concat(JSON.stringify(i)))}setTimeout((function(){t.specClass="none"}),250)}else"none"===this.specClass&&this.getProductDetail(e)},handleCartItemCreate:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t,i){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("".concat(c.cartItemCreate),{sku_id:t,num:i}).then((0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$http.get("".concat(c.cartItemCount)).then(function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.setCartNum(t.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:r.$mHelper.toast("添加成功，在购物车等");case 3:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),hideSpec:function(){var e=this;this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)},getProductDetail:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(c.productDetail),{id:t.id}).then(function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i.productDetail=t.data,i.specClass="show";case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),navTo:function(e){this.$mRouter.push({route:e})},initData:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.search=uni.getStorageSync("search")||{},this.hotSearchDefault=this.search.hot_search_default||"请输入关键字",this.categoryList=[],this.categoryProductList=[],e.next=6,this.getProductCate();case 6:return e.next=8,this.initCartItemCount();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),initCartItemCount:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$mStore.getters.hasLogin&&parseInt(uni.getStorageSync("cartNum"),10)>0?uni.setTabBarBadge({index:this.$mConstDataConfig.cartIndex,text:uni.getStorageSync("cartNum").toString()}):(uni.removeStorageSync("cartNum"),uni.removeTabBarBadge({index:this.$mConstDataConfig.cartIndex}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getProductCate:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(c.productCate)).then(function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"refresh"===t&&uni.stopPullDownRefresh(),e.next=3,i.getAdvList();case 3:return i.categoryList=r.data,a=uni.getStorageSync("indexToCateId"),a?i.categoryList.forEach((function(e,t){a===e.id&&(i.showCategoryIndex=t)})):"one_two_product"===i.styleCateType&&r.data[0].child.length>0?i.currentCateId=r.data[0].child[0].id:(i.showCategoryIndex=0,i.currentCateId=i.categoryList&&i.categoryList[0].id),r.data.length>0&&(i.currentSecondCategoryList=r.data[0].child),i.page=1,i.categoryProductList=[],e.next=11,i.getProductList();case 11:i.loading=!1;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){"refresh"===t&&uni.stopPullDownRefresh(),i.loading=!1}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getAdvList:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(l.advList),{location:"cate_top"}).then((function(e){t.cateTop=e.data.cate_top[0]}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),showCategory:function(e){this.showCategoryIndex=e},showProduct:function(e,t){this.categoryInvertedIndex=0,this.currentSecondCategoryList=e.child,this.showCategoryIndex=t,"one_two_product"===this.styleCateType&&e.child.length>0?this.currentCateId=e.child[0].id:this.currentCateId=e.id,this.price="",this.total_sales="",this.page=1,this.categoryProductList=[],this.getProductList()},handleSalesOrderByChange:function(){0!==this.categoryProductList.length&&(this.price="",this.total_sales="asc"===this.total_sales?"desc":"asc",this.page=1,this.categoryProductList=[],this.getProductList())},handlePriceOrderByChange:function(){0!==this.categoryProductList.length&&(this.total_sales="",this.price="asc"===this.price?"desc":"asc",this.page=1,this.categoryProductList=[],this.getProductList())},getProductList:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.productLoading=!0,t={},this.total_sales&&(t.total_sales=this.total_sales),this.price&&(t.price=this.price),t.page=this.page,e.next=7,this.$http.get("".concat(c.productList),p({cate_id:this.currentCateId},t)).then(function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i.productLoading=!1,i.loadingType=10===t.data.length?"more":"nomore",i.categoryProductList=[].concat((0,a.default)(i.categoryProductList),(0,a.default)(t.data)),uni.removeStorageSync("indexToCateId");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toSearch:function(){this.$mRouter.push({route:"/pages/index/search/search?data=".concat(JSON.stringify(this.search))})},indexTopToDetailPage:function(e){this.$mHelper.handleBannerNavTo(e.jump_type,e.jump_link,e.id)},getMoreProductList:function(){"nomore"!==this.loadingType&&0!==this.categoryProductList.length&&(this.page++,this.getProductList())}})};t.default=h},"268a":function(e,t,i){"use strict";i.r(t);var r=i("2daf"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},"2daf":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=r(i("3b8d")),n=r(i("5393")),o=(i("802d"),{props:{headerShow:{type:Boolean,default:!0},merchantData:{type:Object,default:function(){return{}}},merchantShow:{type:Boolean,default:!1},categoryList:{type:Array,default:function(){return[]}},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{CustomBar:this.CustomBar,searchValue:this.placeholder,appLogo:this.$mSettingConfig.appLogo,isOpenScan:this.$mSettingConfig.isOpenScan,isOpenIndexCate:this.$mSettingConfig.isOpenIndexCate,height:0,width:0,inputTop:0,tabCurrentIndex:0}},created:function(){var e=this,t={};uni.getSystemInfo({success:function(i){e.width=t.left||i.windowWidth,e.height=t.top?t.top+t.height+8:i.statusBarHeight+44,e.inputTop=t.top?t.top+(t.height-30)/2:i.statusBarHeight+7}})},methods:{tabClick:function(e,t){this.tabCurrentIndex=e,this.$emit("tab",{id:t})},getCity:function(){this.$mRouter.push({route:"/pages/index/location/merchant"})},discard:function(){},link:function(){var e=this;this.$mPayment.isWechat()?n.default.ready((function(){n.default.scanQRCode({needResult:1,success:function(t){-1!==t.result.indexOf("http")&&(-1!==t.result.indexOf(e.$mConfig.hostUrl)?-1!==t.result.indexOf("/pages/profile/profile")||-1!==t.result.indexOf("/pages/cart/cart")||-1!==t.result.indexOf("/pages/index/index")||-1!==t.result.indexOf("/pages/notify/notify")||-1!==t.result.indexOf("/pages/category/category")?e.$mRouter.reLaunch({route:t.result.substring(e.$mConfig.hostUrl.length)}):e.$mRouter.redirectTo({route:t.result.substring(e.$mConfig.hostUrl.length)}):e.$mHelper.toast("不能识别该二维码"))},fail:function(t){e.$mHelper.toast("扫描失败："+t.errMsg)}})})):this.$mHelper.toast("请在微信H5进行相关操作")},toSearch:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$emit("search",{searchValue:this.searchValue});case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}});t.default=o},"34aa":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-8c96afde]{background-color:#fff}.rf-category .category-list[data-v-8c96afde]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.rf-category .category-list .left[data-v-8c96afde],.rf-category .category-list .right[data-v-8c96afde]{position:absolute;top:%?100?%;bottom:%?0?%}.rf-category .category-list .left[data-v-8c96afde]{width:24%;left:%?0?%;background-color:#f8f8f8}.rf-category .category-list .left .row[data-v-8c96afde]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-category .category-list .left .row .text[data-v-8c96afde]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}.rf-category .category-list .left .row .text .block[data-v-8c96afde]{position:absolute;width:%?0?%;left:0}.rf-category .category-list .left .row.on[data-v-8c96afde]{height:%?100?%;background-color:#fff}.rf-category .category-list .left .row.on .text[data-v-8c96afde]{font-size:%?30?%;font-weight:600;color:#2d2d2d}.rf-category .category-list .left .row.on .text .block[data-v-8c96afde]{width:%?6?%;height:120%;left:%?10?%}.rf-category .category-list .right[data-v-8c96afde]{width:76%;left:24%;background-color:#fff}.rf-category .category-list .right .second-category[data-v-8c96afde]{z-index:10;white-space:nowrap;width:100%;margin:%?10?% %?10?% %?20?%}.rf-category .category-list .right .second-category .second-category-tag[data-v-8c96afde]{margin-right:%?20?%;padding:%?5?% %?30?%;display:inline-block;border-radius:%?8?%;font-size:%?26?%}.rf-category .category-list .right .second-category .second-category-normal[data-v-8c96afde]{color:#303133;border:none;background-color:#f8f6fc}.rf-category .category-list .right .category[data-v-8c96afde]{width:100%;padding:0 %?15?% %?20?%}.rf-category .category-list .right .category .banner[data-v-8c96afde]{width:96%;margin:%?10?% auto %?30?%;height:24.262vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.05)}.rf-category .category-list .right .category .banner uni-image[data-v-8c96afde]{width:100%;height:24.262vw}.rf-category .category-list .right .category .order-by-wrapper[data-v-8c96afde]{height:%?48?%;line-height:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?10?% 0;font-size:%?26?%}.rf-category .category-list .right .category .order-by-wrapper .order-by[data-v-8c96afde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-category .category-list .right .category .order-by-wrapper .order-by .order-by-item[data-v-8c96afde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;margin:0 %?20?% 0 %?10?%;color:#909399}.rf-category .category-list .right .category .order-by-wrapper .order-by .order-by-item .iconfont-group[data-v-8c96afde]{margin-top:%?-2?%}.rf-category .category-list .right .category .order-by-wrapper .order-by .order-by-item .iconfont[data-v-8c96afde]{height:%?16?%;line-height:%?16?%;display:block;margin-left:%?6?%;font-weight:550;font-size:%?20?%}.rf-category .category-list .right .category .list[data-v-8c96afde]{margin-top:%?20?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.rf-category .category-list .right .category .list .box[data-v-8c96afde]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.rf-category .category-list .right .category .list .box uni-image[data-v-8c96afde]{width:64%;height:calc(71.44vw / 3 * .64)}.rf-category .category-list .right .category .list .box .text[data-v-8c96afde]{margin-top:%?8?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}.rf-category .category-list .right .category .list .box .category-tag[data-v-8c96afde]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?%;font-size:%?26?%;margin-right:%?20?%;color:#303133;background-color:#f8f8f8;border-radius:%?6?%}.rf-category .category-list .right .category .second-category-text[data-v-8c96afde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.rf-category .category-list .right .category .no-data[data-v-8c96afde]{margin:%?48?% 0;color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rf-category .category-list .right .category .no-data .iconfont[data-v-8c96afde]{margin-right:%?20?%;font-size:%?48?%}.rf-category .one-cover-category[data-v-8c96afde]{margin-top:%?20?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.rf-category .one-cover-category .box[data-v-8c96afde]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.rf-category .one-cover-category .box uni-image[data-v-8c96afde]{width:64%;height:calc(71.44vw / 3 * .64)}.rf-category .one-cover-category .box .text[data-v-8c96afde]{margin-top:%?8?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}.rf-category .one-cover-category .box .category-tag[data-v-8c96afde]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?%;font-size:%?26?%;margin-right:%?20?%;color:#303133;background-color:#f8f8f8;border-radius:%?6?%}.rf-category .tui-product-container[data-v-8c96afde]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?10?%}.rf-category .tui-product-container[data-v-8c96afde]:last-child{margin-right:0}.rf-category .category-product-list[data-v-8c96afde]{margin-bottom:%?15?%;padding-bottom:%?15?%;border-bottom:%?1?% solid rgba(0,0,0,.08)}.rf-category .category-product-list[data-v-8c96afde]:last-child{border-bottom:none;background-color:#007aff}.rf-category .tui-pro-item[data-v-8c96afde]{width:100%;margin-bottom:%?20?%;background:#fff;box-sizing:border-box;border-radius:%?12?%;overflow:hidden;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.rf-category .tui-flex-list[data-v-8c96afde]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?1?%!important}.rf-category .tui-pro-img[data-v-8c96afde]{width:100%;display:block}.rf-category .tui-proimg-list[data-v-8c96afde]{width:%?160?%;height:%?160?%!important;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?12?%}.rf-category .tui-pro-content[data-v-8c96afde]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;padding:0 %?20?%}.rf-category .tui-pro-tit[data-v-8c96afde]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.rf-category .tui-sale-price[data-v-8c96afde]{font-size:%?34?%;font-weight:500}.rf-category .tui-factory-price[data-v-8c96afde]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.rf-category .tui-pro-pay[data-v-8c96afde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:#656565}.rf-category .tui-pro-pay .iconfont[data-v-8c96afde]{font-size:%?38?%;padding:0 %?10?%}body.?%PAGE?%[data-v-8c96afde]{background-color:#fff}",""]),e.exports=t},"461a":function(e,t,i){"use strict";i.r(t);var r=i("d399"),a=i("475c");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("ded3");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"8c96afde",null,!1,r["a"],o);t["default"]=s.exports},"475c":function(e,t,i){"use strict";i.r(t);var r=i("0585"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},4943:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-search-bar",class:"bg-"+e.themeColor.name},[e.merchantShow?i("v-uni-view",{staticClass:"merchant",style:{marginTop:e.inputTop+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCity.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont iconshouhuodizhi"}),i("v-uni-text",{staticClass:"title"},[e._v(e._s(e.merchantData.title||"选择商户"))]),i("v-uni-text",{staticClass:"iconfont iconxiajiantou1"})],1):e._e(),i("v-uni-view",{staticClass:"header",style:{width:e.merchantShow?"100vw":e.width+"px",marginTop:e.merchantShow?0:e.inputTop+"px"}},[i("v-uni-view",{staticClass:"input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSearch.apply(void 0,arguments)}}},[i("v-uni-input",{attrs:{disabled:!0}}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-text",{staticClass:"iconfont iconsousuo2"}),i("v-uni-text",{staticClass:"keyword"},[e._v(e._s(e.placeholder))])],1)],1),i("v-uni-view",{staticClass:"addr"},[e.isOpenScan?i("v-uni-text",{staticClass:"iconfont",class:[e.icon],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.link.apply(void 0,arguments)}}}):i("v-uni-image",{staticClass:"logo",attrs:{src:e.appLogo}})],1)],1),e.isOpenIndexCate&&e.categoryList.length>0?i("v-uni-scroll-view",{staticClass:"index-cate",attrs:{"scroll-x":!0}},e._l(e.categoryList,(function(t,r){return i("v-uni-view",{key:r,staticClass:"index-cate-item",class:e.tabCurrentIndex===r?"text-"+e.themeColor.name+" active":"",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.tabClick(r,t.id)}}},[e._v(e._s(t.title))])})),1):e._e()],1)},n=[]},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.memberLevelIndex=t.productVirtualVerificationVerify=t.orderProductVirtualView=t.orderProductVirtualIndex=t.notifySubscriptionConfigIndex=t.notifySubscriptionConfigUpConfig=t.notifyUnRreadCount=t.notifyClearAll=t.notifyClear=t.notifyReadAll=t.notifyRead=t.notifyView=t.notifyIndex=t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.orderInvoiceCreate=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var r="/tiny-shop/v1/member/member/index";t.memberInfo=r;var a="/tiny-shop/v1/member/member/update";t.memberUpdate=a;var n="/tiny-shop/v1/member/address/index";t.addressList=n;var o="/tiny-shop/v1/member/address/default";t.addressDefault=o;var c="/tiny-shop/v1/member/address/view";t.addressDetail=c;var s="/tiny-shop/v1/member/address/create";t.addressCreate=s;var d="/tiny-shop/v1/member/address/update";t.addressUpdate=d;var l="/tiny-shop/v1/member/address/delete";t.addressDelete=l;var u="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=u;var f="/tiny-shop/v1/member/coupon/index";t.myCouponList=f;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var h="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=h;var g="/tiny-shop/v1/member/coupon/clear";t.couponClear=g;var y="/tiny-shop/v1/member/order/index";t.orderList=y;var v="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=v;var b="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=b;var m="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=m;var w="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=w;var x="/tiny-shop/v1/member/order/view";t.orderDetail=x;var k="/tiny-shop/v1/member/order/delete";t.orderDelete=k;var C="/tiny-shop/v1/member/footprint/index";t.footPrintList=C;var _="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=_;var L="/tiny-shop/v1/member/collect/index";t.collectList=L;var P="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=P;var S="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=S;var I="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=I;var j="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=j;var D="/tiny-shop/v1/member/invoice/index";t.invoiceList=D;var R="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=R;var $="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=$;var O="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=O;var T="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=T;var z="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=z;var A="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=A;var E="/tiny-shop/v1/member/order-invoice/create";t.orderInvoiceCreate=E;var B="/tiny-shop/v1/member/opinion/index";t.opinionList=B;var V="/tiny-shop/v1/member/opinion/create";t.opinionCreate=V;var U="/tiny-shop/v1/member/opinion/view";t.opinionDetail=U;var H="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=H;var M="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=M;var N="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=N;var J="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=J;var F="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=F;var W="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=W;var G="/tiny-shop/v1/common/file/images";t.uploadImage=G;var Q="/tiny-shop/v1/member/notify/index";t.notifyIndex=Q;var q="/tiny-shop/v1/member/notify/view";t.notifyView=q;var K="/tiny-shop/v1/member/notify/read";t.notifyRead=K;var X="/tiny-shop/v1/member/notify/read-all";t.notifyReadAll=X;var Y="/tiny-shop/v1/member/notify/clear";t.notifyClear=Y;var Z="/tiny-shop/v1/member/notify/clear-all";t.notifyClearAll=Z;var ee="/tiny-shop/v1/member/notify/un-read-count";t.notifyUnRreadCount=ee;var te="/tiny-shop/v1/member/notify-subscription-config/index";t.notifySubscriptionConfigIndex=te;var ie="/tiny-shop/v1/member/notify-subscription-config/up-config";t.notifySubscriptionConfigUpConfig=ie;var re="/tiny-shop/v1/member/order-product-virtual/index";t.orderProductVirtualIndex=re;var ae="/tiny-shop/v1/member/order-product-virtual/view";t.orderProductVirtualView=ae;var ne="/tiny-shop/v1/order/product-virtual-verification/verify";t.productVirtualVerificationVerify=ne;var oe="/tiny-shop/v1/member/member-level/index";t.memberLevelIndex=oe},a544:function(e,t,i){var r=i("d7ab");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("de8686c2",r,!0,{sourceMap:!1,shadowMode:!1})},b9cb:function(e,t,i){"use strict";i.r(t);var r=i("4943"),a=i("268a");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("ea18");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"5e7126a6",null,!1,r["a"],o);t["default"]=s.exports},cc5e:function(e,t,i){var r=i("34aa");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("664eef1a",r,!0,{sourceMap:!1,shadowMode:!1})},d399:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"rf-category"},[i("rf-search-bar",{attrs:{title:"扫一扫",icon:"iconsaomiao",placeholder:e.hotSearchDefault},on:{search:function(t){arguments[0]=t=e.$handleEvent(t),e.toSearch.apply(void 0,arguments)}}}),("one_two_three_cover"===e.styleCateType||"one_two_three_text"===e.styleCateType)&&e.categoryList.length>0?i("v-uni-view",{staticClass:"category-list",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.moveHandle.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},e._l(e.categoryList,(function(t,r){return i("v-uni-view",{key:t.id,staticClass:"row",class:[r===e.showCategoryIndex?"on":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showCategory(r)}}},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"block",class:"bg-"+e.themeColor.name}),e._v(e._s(t.title))],1)],1)})),1),i("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},e._l(e.categoryList,(function(t,r){return i("v-uni-view",{key:t.id},[r===e.showCategoryIndex?i("v-uni-view",{staticClass:"category"},[e.cateTop&&e.cateTop.cover?i("v-uni-view",{staticClass:"banner",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.indexTopToDetailPage(e.cateTop)}}},[i("v-uni-image",{attrs:{src:e.cateTop&&e.cateTop.cover,mode:"aspectFill"}})],1):e._e(),e._l(t.child,(function(t){return i("v-uni-view",{key:t.id,staticClass:"box"},[i("v-uni-view",{staticClass:"second-category-text",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/product/list?cate_id="+t.id)}}},[e._v(e._s(t.title)),i("v-uni-text",{staticClass:"iconfont iconyou"})],1),t.child&&t.child.length>0?i("v-uni-view",{staticClass:"list"},e._l(t.child,(function(t){return i("v-uni-view",{key:t.id,staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.navTo("/pages/product/list?cate_id="+t.id)}}},["one_two_three_cover"===e.styleCateType?[i("v-uni-image",{attrs:{src:t.cover||e.errorImage}}),i("v-uni-view",{staticClass:"text"},[e._v(e._s(t.title))])]:e._e(),"one_two_three_text"===e.styleCateType?i("v-uni-text",{staticClass:"category-tag in1line"},[e._v(e._s(t.title))]):e._e()],2)})),1):i("v-uni-view",{staticClass:"no-data"},[i("i",{staticClass:"iconfont icon404"}),e._v("暂无子分类")])],1)})),0===t.child.length?i("v-uni-view",{staticClass:"no-data"},[i("i",{staticClass:"iconfont icon404"}),e._v("暂无分类")]):e._e()],2):e._e()],1)})),1)],1):e._e(),0!==e.categoryList.length||e.loading?e._e():i("rf-empty",{attrs:{bottom:e.bottom,info:"暂无产品分类~"}}),i("rfLoading",{attrs:{isFullScreen:!0,active:e.loading}}),"show"===e.specClass?i("v-uni-view",{staticClass:"popup spec show",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.stopPrevent.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideSpec.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideSpec.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"layer",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.stopPrevent.apply(void 0,arguments)}}},[i("rf-attr-content",{attrs:{product:e.productDetail,showBuyBtn:!0},on:{toggle:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSpec.apply(void 0,arguments)}}})],1)],1):e._e()],1)},n=[]},d7ab:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".rf-search-bar[data-v-5e7126a6]{position:fixed;width:100%;top:0;left:0;z-index:10;color:#606266}.rf-search-bar .merchant[data-v-5e7126a6]{line-height:1;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:12;font-weight:500;font-size:%?32?%;padding:%?10?% %?30?% %?14?%}.rf-search-bar .merchant .iconshouhuodizhi[data-v-5e7126a6]{font-size:%?40?%;font-weight:600;margin-right:%?10?%}.rf-search-bar .merchant .iconxiajiantou1[data-v-5e7126a6]{margin-left:%?4?%;font-size:%?28?%}.rf-search-bar .header[data-v-5e7126a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:12;padding-bottom:%?10?%}.rf-search-bar .header .addr[data-v-5e7126a6]{margin:0 %?20?%;height:%?60?%;line-height:%?60?%}.rf-search-bar .header .addr .iconfont[data-v-5e7126a6]{font-weight:500;font-size:%?56?%}.rf-search-bar .header .addr .logo[data-v-5e7126a6]{width:%?45?%;height:%?45?%;border-radius:%?8?%;margin-left:%?10?%}.rf-search-bar .header .input-box[data-v-5e7126a6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%;line-height:%?60?%;background-color:#fff;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?6?% 0 0 %?20?%}.rf-search-bar .header .input-box .wrapper[data-v-5e7126a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:50%;left:50%;font-size:%?26?%;color:#909399;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.rf-search-bar .header .input-box .wrapper .iconsousuo2[data-v-5e7126a6]{font-size:%?34?%;margin-right:%?20?%}.rf-search-bar .header .input-box uni-input[data-v-5e7126a6]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .index-cate[data-v-5e7126a6]{white-space:nowrap;z-index:10;background-color:#fff;position:fixed;margin-bottom:%?10?%}.rf-search-bar .index-cate .index-cate-item[data-v-5e7126a6]{display:inline-block;height:%?75?%;line-height:%?75?%;margin:0 %?15?%;text-align:center;width:%?120?%;font-size:%?28?%}.rf-search-bar .index-cate .active[data-v-5e7126a6]{font-weight:500;border-bottom:2px solid}",""]),e.exports=t},ded3:function(e,t,i){"use strict";var r=i("cc5e"),a=i.n(r);a.a},ea18:function(e,t,i){"use strict";var r=i("a544"),a=i.n(r);a.a}}]);