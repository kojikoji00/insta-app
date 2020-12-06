# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_articles_on_user_id  (user_id)
#
require 'rails_helper'

RSpec.describe Article, type: :model do
  let!(:user) { create(:user) }

  context '内容が入力されている場合' do
    let!(:article) {create(:article, user: user)}

    it '記事を保存できる' do
      expect(article).to be_valid
    end
  end

  context 'タイトルの文字が一文字の場合' do
    let!(:article) {build(:article, content: Faker::Lorem.characters(number: 1), user: user)}

    before do
      article.save
    end

    it '記事を保存できない' do
      expect(article.errors.messages[:content][0]).to eq('は2文字以上で入力してください')
    end
  end
end
