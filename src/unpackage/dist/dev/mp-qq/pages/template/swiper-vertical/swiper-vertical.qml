<view class="page"><swiper class="swiper" circular="{{circular}}" vertical="{{true}}" data-event-opts="{{[['change',[['onSwiperChange',['$event']]]]]}}" bindchange="__e"><block qq:for="{{videoList}}" qq:for-item="item" qq:for-index="__i0__" qq:key="id"><swiper-item><video class="video vue-ref-in-for" id="{{item.id}}" src="{{item.src}}" controls="{{false}}" loop="{{true}}" show-center-play-btn="{{false}}" data-ref="{{item.id}}"></video></swiper-item></block></swiper></view>