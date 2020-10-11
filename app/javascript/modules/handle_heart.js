import $ from 'jquery'
import axios from 'modules/axios'

const listenInactiveHeartEvent = (articleId) => {
  $('.inactive-heart').on('click', () => {
    // var id = $('.this').attr('id');
    axios.post(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.active-heart').removeClass('hidden')
          $('.inactive-heart').addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
}

const listenActiveHeartEvent = (articleId) => {
  $('.active-heart').on('click', () => {
    axios.delete(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.active-heart').addClass('hidden')
          $('.inactive-heart').removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
}
export {
  listenInactiveHeartEvent,
  listenActiveHeartEvent
}
// const listenInactiveHeartEvent = (articleId) => {
//   $('.inactive-heart').find('articleId').on('click', () => {
//     // var id = $('.this').attr('id');
//     axios.post(`/articles/${articleId}/like`)
//       .then((response) => {
//         if (response.data.status === 'ok') {
//           $('.active-heart').find('articleId').removeClass('hidden')
//           $('.inactive-heart').find('articleId').addClass('hidden')
//         }
//       })
//       .catch((e) => {
//         window.alert('Error')
//         console.log(e)
//       })
//   })
// }

// const listenActiveHeartEvent = (articleId) => {
//   $('.active-heart').find('articleId').on('click', () => {
//     axios.delete(`/articles/${articleId}/like`)
//       .then((response) => {
//         if (response.data.status === 'ok') {
//           $('.active-heart').find('articleId').addClass('hidden')
//           $('.inactive-heart').find('articleId').removeClass('hidden')
//         }
//       })
//       .catch((e) => {
//         window.alert('Error')
//         console.log(e)
//       })
//   })
// }
// export {
//   listenInactiveHeartEvent,
//   listenActiveHeartEvent
// }