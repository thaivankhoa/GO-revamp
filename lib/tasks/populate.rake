namespace :db do
  desc "Erase and fill database"
  task :populate => :environment do
    require 'populator'
    require 'faker'
      [Post,User,Category].each(&:delete_all)
        Category.create!([
          {name: "blogs"},
          {name: "sharing"},
          {name: "frontend"},
          {name: "ror"}
        ])
        Post.populate 10 do |post|
          post.category_id = rand(1..4)
          post.title = Populator.words(1..5).titleize
          post.body = Populator.sentences(2..10)
          post.view = 1
          post.picture = "chicken.jpg"
          post.created_at = Time.now
          post.user_id = 1
        end
        User.create(:email => 'admin@gmail.com', :password => '12345678', :password_confirmation => '12345678', sign_in_count: 1, current_sign_in_at: "2016-02-05 05:03:36", last_sign_in_at: "2016-02-05 05:03:36", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1", user_type: 1, avatar: nil, username: "Patrick")
        # User.populate 10 do |user|
        #   user.username = Faker::Name.name
        #   user.email = Faker::Internet.email
        #   user.encrypted_password = "12345678"
        #   user.created_at = Time.now
        #   user.avatar = Faker::Avatar.image
        #   user.sign_in_count = 1
        #   user.user_type = 1
        # end
  end
end