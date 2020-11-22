// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener('DOMContentLoaded', () => {
  const reader = new FileReader();
  const imageUpload = document.getElementById("file")
      $('#profile_avatar_prev').on('click', () => {
        $('#file').click()
      })
      $('#file').on('change', () => {
        $('#file-btn').trigger('click')
      })
      
      imageUpload.onchange = function() {
        var file = $('input[type="file"]').prop('files')[0];
        
    if(!file) {
      window.alert('画像を選択してください')
    } else {
      reader.readAsDataURL(file);
      reader.onload = function(e){
        $('#profile_avatar_prev').attr('src', e.target.result);
        axios.put('/profile', {profile: {avatar: e.target.result}})
        .then((res) => {
            window.alert('成功!')
        })
        .catch((e) => {
          window.alert('失敗!')
        })
      }
    }
  }
})
  // axios.get(`/articles/${articleId}/comments`)
  //   .then((response) => {
    //     const comments = response.data
    //   })
    
    // $('.profile_avatar').on('click', function() {
  //   $('#file').trigger('click');
  // });
  // $('#file').on('change', function(e){
    //   $('#file-btn').trigger('click')
  //   // debugger
  // })

  // var files = e.target.files[0];
  // var reader = new FileReader();
  // reader.onload = function (e) {
  //   debugger
  // }
  //   reader.readAsDataURL(e.target.files[0]);



// 記事を投稿した時間を表示
moment(article.created_at).fromNow()