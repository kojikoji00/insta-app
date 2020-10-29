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
    comments.forEach((comment) => {
      appendNewComment(comment)
    })
  })

  $('.add-comment-button').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/articles/${articleId}/comments`, {
        comment: {content: content}

        // 第二引数
      })
        .then((res) => {
          const comment = res.data
          appendNewComment(comment)
          $('#comment_content').val('')
          debugger
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
