class Contact < ActiveRecord::Base

	validates :name,  presence: true 
  validates :email, presence: true, format: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	validates :subject, presence: true
	validates :message, presence: true
end
