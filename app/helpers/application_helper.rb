module ApplicationHelper
  def evaluate_time(created_at)
    time = (Time.now.yday - created_at.to_time.yday)
    time == 0 ? "Today" : time == 1 ? "Yesterday" : "#{time} days ago"
  end
end
