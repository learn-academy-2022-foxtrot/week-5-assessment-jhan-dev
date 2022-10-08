# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN


#   PROBLEM #1

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Given input of an array of drinks
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# Given input of letter param
letter_o = 'o' # Expected output: --> ['coffee', 'soda water']

# Given input of letter param
letter_t = 't' # Expected Output: --> ['tea', 'water', 'soda water']

#Creating a Method that takes in an Arr param & str param
def char_filter(words, letter)
    #Iterate words w/ word and use .include to conditional check if letter is within the current word
    words.filter { |word| word.include? letter }
end

#print the method with arguments to check for 'o' words in an array
p char_filter(beverages_array, letter_o)
#print the method with arguments to check for 't' words in an array
p char_filter(beverages_array, letter_t)



#   PROBLEM #2

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# access us_states Hash with .values then use .flatten to remove inner arrays within array then use .sort to alphabetize the values and display with p to print
p us_states.values.flatten.sort 
# Outputs: --> ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington']


#   PROBLEM #3a

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#Create class Bike
class Bike
    #Add attr_accessor to be able to update model, wheels, currentspeed
    attr_accessor :model, :wheels, :current_speed

    #Create the intialize method to be parent default attributes that takes in a bike model param
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    #Create bike_info method that stores string interpolation that will display information of bike
    def bike_info
        "The #{@model} bike has #{@wheels} wheels, and is going #{@current_speed} mph."
    end
    

    
    #   PROBLEM #3b
    
    # -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.
    
    #Create pedal_faster method that takes in a num param that will add num to the current speed of the bike
    def pedal_faster(num)
        @current_speed = @current_speed + num
    end

    #Create brake method that takes in a num param that will subtract the current speed with the num param
    def brake(num)
        #If the current speed - num is a negative integer --> make the current speed to have value of 0
        if (@current_speed - num).negative?
            current_speed = 0
        #Else the current speed will = the current speed minus the num param
        else
            @current_speed = @current_speed - num
        end
    end
end

my_bike = Bike.new('mountain bike')

# Expected output example: my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(10)
# Expected output example: my_bike.pedal_faster(18) => 28
p my_bike.pedal_faster(18)
# Expected output example: my_bike.brake(5) => 23
p my_bike.brake(5)
# Expected output example: my_bike.brake(25) => 0
p my_bike.brake(25)
    