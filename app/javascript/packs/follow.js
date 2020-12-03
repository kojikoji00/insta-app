import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#account-show').data()
  const accountId = dataset.accountId

  axios.get(`/accounts/${accountId}/follows/id`)
    .then((response) => {
      const accountFollowed = response.data.accountFollowed
      if (accountFollowed) {
        $('.unfollow').removeClass('hidden')
      } else {
        $('.follow').removeClass('hidden')
      }
    })

    $('.follow').on('click', function(){
      axios.post(`/accounts/${accountId}/follows`)
        .then((response) => {
          if(response.data.status === 'ok'){
            $('.unfollow').removeClass('hidden')
            $('.follow').addClass('hidden')
            $('.count_followers').html(`${response.data.followCount}`)
          }
        })
        .catch((e) => {
          window.alert('Error')
          console.log(e)
        })
      })

    $('.unfollow').on('click', function(){
      axios.post(`/accounts/${accountId}/unfollows`)
        .then((response) => {
          if(response.data.status === 'ok'){
            $('.follow').removeClass('hidden')
            $('.unfollow').addClass('hidden')
            $('.count_followers').html(`${response.data.followCount}`)
          }
        })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
    })
})
