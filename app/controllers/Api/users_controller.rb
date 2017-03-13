class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # will create this later as a bonus feature to update password/username/etc
  end

  def destroy
    # will create this later as a bonus feature to delete a user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
