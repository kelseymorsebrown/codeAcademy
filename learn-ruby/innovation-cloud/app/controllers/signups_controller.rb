class SignupsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def new
    @signup = Signup.new
  end

  def create
    @signup = Signup.new(signup_params)
    if @signup.save
      redirect_to '/thanks'
    end
  end
  
  private
  # Strong parameters give us a safe way to collect data from a form and update the Signup model.
  # Here we require the model name signup and permit the column name email.
  def signup_params
    params.require(:signup).permit(:email)
  end
end