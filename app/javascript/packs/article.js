import $ from 'jquery'
import axios from 'modules/axios'

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $('.active-heart${articleId}').removeClass('hidden')
  } else {
    $('.inactive-heart${articleId}').removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  var dataset = $('.article-show').attr('id')
  // var dataset = $('.article-show').attr('id', 'box')
  var dataset = $('.article-show').data()
  var articleId = dataset.articleId
  debugger
  axios.get(`/articles/${articleId}/like`)
  .then((response) => {
    const hasLiked = response.data.hasLiked
    if (hasLiked) {
      $('.active-heart').removeClass('hidden')
    } else {
      $('.inactive-heart').removeClass('hidden')
    }
  })
  $('.inactive-heart').find('articleId').on('click', () => {
    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.active-heart').find('articleId').removeClass('hidden')
        $('.inactive-heart').find('articleId').addClass('hidden')
      }
    })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
    })
    $('.active-heart').find('articleId').on('click', () => {
      axios.delete(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.active-heart').find('articleId').addClass('hidden')
          $('.inactive-heart').find('articleId').removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})