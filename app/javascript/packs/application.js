// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

export default axios

document.addEventListener('DOMContentLoaded', () => {

  axios.get(`/articles/${articleId}/comments`)
    .then((response) => {
      const comments = response.data
    })

  $('.profile_avatar').on('click',() => {
    $('#file').trigger('click');
  });
  $('#file').on('change',function(e) {
    $('#file-btn').trigger('click');
  })
  $('#file').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $('.profile_avatar').attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
});

// 記事を投稿した時間を表示
moment(article.created_at).fromNow()

// $(function () {
//   $('#img_field').change(function () {
//     $(this).closest('form').submit();
//   });
// });
// });

// $("#btn-upload").click(function () {
//   $("#file").click();
//   return false; // must!
// });

// $(function(){
//   $('#img_field').change(function(e){
    //ファイルオブジェクトを取得する
    // var file = e.target.files[0];
    // var reader = new $FileReader();

    // //画像でない場合は処理終了
    // if(file.type.indexOf('avatar') < 0){
    //   alert("画像ファイルを指定してください。");
    //   return false;
    // }
    //アップロードした画像を設定
  //   reader.onload = (function(file){
  //     return function(e){
  //       $("#img1").attr("src", e.target.result);
  //       $("#img1").attr("title", file.name);
  //     };
  //   })(file);
  //   reader.readAsDataURL(file);
  // });
//     $('#file').change(function(){
//       $("#file-btn").submit();
//     });
//   });
// });