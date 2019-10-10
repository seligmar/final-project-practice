class DonationsController < ApplicationController

  def index 
    donations = Donation.all 
    render json: donations
  end 

  def donate 
    user = User.find_by(id: params[:user_id])
    newDonation = params[:total]
    donationstotal = 0 
    user.donations.each do |donation| 
        donationstotal = donationstotal + donation.total 
    end 
    if donationstotal < 2800 && donationstotal + newDonation < 2800 
      Donation.create(total: newDonation, user_id: user.id)
      render json: {error: 'Thank you for your generosity! Your contribution will help us strengthen our Democracy!'}
    else 
      render json: {error: 'Thank you for your generosity! Your proposed donation exceedes FEC contribution limits.'}
end 
end

private 

 def donations_params 
    params.require(:user).permit(:user_id, :total)
end 

end
