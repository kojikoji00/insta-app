import $ from 'jquery'
import axios from 'modules/axios'

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $('.active-heart').removeClass('hidden')
  } else {
    $('.inactive-heart').removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // const dataset = $('.article-show[id]')
  $('.inactive-heart').on('click', function(){
    const articleId = $(this).attr('id')
    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#${articleId}.active-heart`).removeClass('hidden')
        $(`#${articleId}.inactive-heart`).addClass('hidden')
      }
    })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
  
  $('.active-heart').on('click', function(){
    const articleId = $(this).attr('id')
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $(`#${articleId}.active-heart`).addClass('hidden')
        $(`#${articleId}.inactive-heart`).removeClass('hidden')
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })
  // axios.get(`/articles/${articleId}/like`)
  //   .then((response) => {
  //     const hasLiked = response.data.hasLiked
  //     handleHeartDisplay(hasLiked)
  //   })
})
