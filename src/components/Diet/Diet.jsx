import React from 'react'
import dietImg from '../../img/dietbg.png'

const Diet = () => {
  return (
    <div className='bg-sky-50 pb-10'>
      <div className='w-full md:h-96 h-80 flex flex-col items-center justify-center' style={{ backgroundImage: `url(${dietImg})` }}>
        <h1 className='text-white text-3xl'>What to put on your plate?</h1>
        <div className='text-center pt-5 px-5 max-w-2xl text-gray-100'>
          {/* list of what to put on your plate */}
          You probably know a healthy diet benefits you physically, mentally and socially. Without good food and drink choices, you're at greater risk of chronic diseases, such as cardiovascular disease, type 2 diabetes, some cancers, and even mental health issues, such as anxiety and depression. A healthy diet helps socially too - regularly connecting with other people may stave off loneliness and isolation.
        </div>
      </div>


      <h1 className='text-center text-3xl text-green-600 pt-10'>Here are some tips for healthy Diet</h1>

      <ul className='px-8 md:px-80 mt-5 text-gray-800 list-disc'>
      <ul>
    <li>Eat a wide variety of foods from the five food groups: plenty of colorful vegetables, legumes/beans, fruit, grain (cereal) foods (mostly wholegrain and high-fiber varieties), lean meats and poultry, fish, eggs, tofu, nuts, and seeds; milk, yogurt, cheese, or their alternatives (mostly reduced fat).</li>
    <li>Drink plenty of water - six to eight cups of fluid per day.</li>
    <li>Limit foods high in saturated fat, such as biscuits, cakes, pastries, pies, processed meats, commercial burgers, pizza, fried foods, potato chips, crisps, and other savory snacks.</li>
    <li>Replace high-fat foods containing mostly saturated fat with foods containing mostly polyunsaturated and monounsaturated fats. Swap butter, cream, cooking margarine, coconut, and palm oil with unsaturated fats from oils, spreads, nut butters, and pastes, and avocado.</li>
    <li>Limit foods and drinks containing added salt, and don't add salt to foods in cooking or at the table.</li>
    <li>Limit foods and drinks containing added sugars, such as confectionery, sugar-sweetened soft drinks and cordials, fruit drinks, vitamin waters, energy, and sports drinks.</li>
    <li>Keep 'extras' or 'sometimes foods' to a minimum - they're not a regular part of a healthy diet. Extras are the high sugar, high fat, high salt foods listed above, such as commercial burgers, pizza, alcohol, lollies, cakes and biscuits, fried foods, and fruit juices and cordials.</li>
    <li>Be physically active. (Aim for at least 30 minutes of moderate intensity physical activity, such as walking, every day.)</li>
  </ul>
      </ul>
      {/* list of what to put on your plate */}


      {/* Cards */}
      <h1 className='text-center text-3xl text-green-600 pt-20'>Example Menu for you</h1>
      <div className="text-gray-600 h-full body-font">
        <div className="container px-5 pt-4 md:w-3/5 mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Breakfast</h1>
                  <ul className='list-disc'>
                 <li>Green smoothie packed with spinach, assorted fruits, and Greek yogurt</li>
    <li>Veggie-packed omelet served with whole-grain toast</li>
    <li>Delicious avocado breakfast bruschetta</li>
    <li>Wholesome oatmeal with a banana split twist</li>
    <li>Kale and sweet potato grits topped with eggs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Lunch</h1>
                  <ul className='list-disc'>
                  <li>Whole-grain sandwich filled with chicken, tomato, and avocado</li>
    <li>Stir-fried vegetables served with nutritious quinoa</li>
    <li>Apple-infused coleslaw for a refreshing side</li>
    <li>Hearty quesadillas made with black beans and sweet potato</li>
    <li>Tuna salad with a zesty twist - Sanchico style</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Dinner</h1>
                  <ul className='list-disc'>
                  <li>Roasted chicken breast served with a side of roasted vegetables and hummus</li>
    <li>Baked salmon paired with zucchini and sweet potato</li>
    <li>Whole-wheat pasta combined with ground turkey and flavorful tomato sauce</li>
    <li>Argentinean-style grilled steak accompanied by salsa criolla</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 ">
              <div
                className="h-full shadow-sm shadow-green-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                <div className="p-8">
                  <h1 className="title-font text-2xl font-medium text-center text-green-700 mb-3">Snack</h1>
                  <ul className='list-disc'>
                  <li>Baby carrots served with hummus</li>
    <li>Celery sticks paired with natural peanut butter</li>
    <li>Fruit combined with yogurt</li>
    <li>Banana cocoa yogurt popsicles</li>
    <li>Chili-flavored popcorn</li>
    <li>Delectable bean dip for dipping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}

      {/* Remember */}
      <h1 className='text-center text-3xl text-green-600 pt-20 pb-5'>Remember Sunita...</h1>
      <ul className='px-8 md:px-80 mt-2 text-gray-800 list-disc'>
      <li>Your dietary needs may change as you age, so adapt your food choices accordingly.</li>
    <li>Understand appropriate serving sizes and dietary requirements specific to your age.</li>
    <li>If you require guidance in selecting or preparing a healthy diet, consult with a family member, healthcare professional, caregiver, or accredited practicing dietitian.</li>
    <li>Discuss your individual health requirements with your doctor for personalized advice.</li>
      </ul>
      {/* Remember */}

    </div>
  )
}

export default Diet