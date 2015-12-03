# Preview all emails at http://localhost:3000/rails/mailers/contacts_mailer
class ContactsMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contacts_mailer/message
  def message
    ContactsMailer.message
  end

end
