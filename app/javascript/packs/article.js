import $ from 'jquery'
import axios from 'modules/axios'


const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $(`#${articleId}.active-heart`).removeClass('hidden')
  } else {
    $(`#${articleId}.inactive-heart`).removeClass('hidden')
  }
}

const appendNewComment = (comment) => {
  $('.comments-container').append(
    `<div class="article_comment"><p>${comment.content}</p></div>`
  )
}

// document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('DOMContentLoaded', () => {
  // const dataset = $('.article-show[id]')
  const dataset = $('#article-show').data()
  const articleId = dataset.articleId
  
  axios.get(`/articles/${articleId}/comments`)
  .then((response) => {
    const comments = response.data
    comments.forEach((commentNew) => {
      appendNewComment(commentNew)
    })
  })

  $('.add-comment-button').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/articles/${articleId}/comments`, {
        comment: {content: content}
      })
      .then((res) => {
        const commentNew = res.data
        appendNewComment(commentNew)
        debugger
        $('#comment_content').val('')
        })
    }
  })


  axios.get(`/articles/${articleId}/like`)
  .then((response) => {
    const hasLiked = response.data.hasLiked
    handleHeartDisplay(hasLiked)
  })

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
})
