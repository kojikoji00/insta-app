import $ from 'jquery'
import axios from 'modules/axios'

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $('.active-heart,#id').removeClass('hidden')
  } else {
    $('.inactive-heart,#id').removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('.article-show[id]')
  // const articleId = dataset.attr('id')
  
  $('.inactive-heart').on('click', () => {
    // const articleId = dataset.attr('id')
    const articleId = $(this).attr('id')
    debugger

    axios.post(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.active-heart[id]').removeClass('hidden')
        $('.inactive-heart[id]').addClass('hidden')
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })
  $('.active-heart').on('click', function(){
    var articleId = $(this).attr('id')
    axios.delete(`/articles/${articleId}/like`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.active-heart[id]').addClass('hidden')
        $('.inactive-heart[id]').removeClass('hidden')
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })
  axios.get(`/articles/${articleId}/like`)
    .then((response) => {
      const hasLiked = response.data.hasLiked
      handleHeartDisplay(hasLiked)
    })
})
// const handleHeartDisplay = (hasLiked) => {
  //   if (hasLiked) {
    //     $('.active-heart').removeClass('hidden')
    //   } else {
      //     $('.inactive-heart').removeClass('hidden')
      //   }
      // }
      
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