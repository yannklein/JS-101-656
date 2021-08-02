# puts ["Hello from ruby!", 3]

my_name = "chERi"
# puts my_name

# p my_name.upcase
# p my_name.downcase
# p my_name.capitalize
# p my_name.length
# p my_name[0]
# name_array = my_name.split('')
# p name_array
# p name_array.join

# p "Hi #{my_name}"

students = ['Quill', 'Derek', 'Kevin', 'Rhys', 'Ope']

# CRUD
# CREATE
students.push('Seira')
students << 'Cheri'
# p students
# READ
# p students[1]
# UPDATE
students[2] = 'Super Kevin 💪'
# p students
# DELETE
students.delete_at(3)
# p students

students.each do |student|
  # puts "#{student} is amazing!"
end

age = 21

if age == 18
  # puts "Finally! You can vote"
elsif age < 18
  # puts "Not yet"
else
  # puts "You're old"
end

def square(number)
  number * number
end

p square(4)