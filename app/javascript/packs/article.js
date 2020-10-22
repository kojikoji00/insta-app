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
  const dataset = $('.article-show[id]')
  $('.inactive-heart').on('click', function(){
    const articleId = $(this).attr('id')
  // const articleId = dataset.attr('id')
  // $('.inactive-heart[id]').on('click', () => {
    // const articleId = dataset.attr('id')
    
    axios.post(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          // $('.active-heart[id]').removeClass('hidden')
          // $('.inactive-heart[id]').addClass('hidden')
          $('.active-heart,#articleId').removeClass('hidden')
          $('.inactive-heart,#articleId').addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
  
  $('.active-heart').on('click', function(){
    const articleId = $(this).attr('id')
    debugger
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.active-heart,#articleId').addClass('hidden')
        $('.inactive-heart,#articleId').removeClass('hidden')
        }
      })
      .catch((e) => {
        debugger
        window.alert('Error')
        console.log(e)
      })
  })
})
// axios.get(`/articles/${articleId}/like`)
//   .then((response) => {
//     const hasLiked = response.data.hasLiked
//     handleHeartDisplay(hasLiked)
//   })

      
      // document.addEventListener('DOMContentLoaded', () => {
        //   var articleId = $('.article-show[id]')
        //   debugger
        
        //   $('.inactive-heart').on('click', () => {
          //     axios.post(`/articles/${articleId}/like`)
//     .then((response) => {
//       if (response.data.status === 'ok') {
//         $('.active-heart').removeClass('hidden')
//         $('.inactive-heart').addClass('hidden')
//       }
//     })
//     .catch((e) => {
//       window.alert('Error')
//       console.log(e)
//     })
//   })
//   $('.active-heart').on('click', () => {
  //     axios.delete(`/articles/${articleId}/like`)
//     .then((response) => {
//       if (response.data.status === 'ok') {
//         $('.active-heart').addClass('hidden')
//         $('.inactive-heart').removeClass('hidden')
//       }
//     })
//     .catch((e) => {
//       window.alert('Error')
//       console.log(e)
//     })
//   })
//   $('.active-heart').on('click', () => {
//     axios.get(`/articles/${articleId}/like`)
//     .then((response) => {
//       const hasLiked = response.data.hasLiked
//       if (hasLiked) {
//         $('.active-heart#id').removeClass('hidden')
//       } else {
//         $('.inactive-heart#id').removeClass('hidden')
//       }
//     })
//   })
//   $('.inactive-heart').on('click', () => {
//     axios.get(`/articles/${articleId}/like`)
//     .then((response) => {
//       const hasLiked = response.data.hasLiked
//       if (hasLiked) {
//         $('.active-heart#id').removeClass('hidden')
//       } else {
//         $('.inactive-heart#id').removeClass('hidden')
//       }
//     })
//   })
// })