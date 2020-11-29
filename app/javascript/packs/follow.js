import $ from 'jquery'
import axios from 'modules/axios'

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#account-show').data()
  const accountId = dataset.accountId

  axios.get(`/accounts/${accountId}/follows`)
  .then((response) => {
    debugger
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
          // $("#following-count_<%= current_user.id %>").html('<%= link_to "#{ current_user.follower.count }フォロー中", users_following_path(@user) %>');
          $(".count_followers").html('<%= link_to  account_follows_path %>')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
    })

    $('.unfollow').on('click', function(){
      debugger
      axios.post(`/accounts/${accountId}/unfollows`)
      .then((response) => {
        if(response.data.status === 'ok'){
          $('.follow').removeClass('hidden')
          $('.unfollow').addClass('hidden')
          $(".count_followers").html('<%= link_to  account_follows_path %>')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
    })
})
