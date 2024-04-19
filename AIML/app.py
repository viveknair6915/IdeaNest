import streamlit as st
import pickle
import pandas as pd
def recommender(company):
    cmp_idx = companies[companies['name'] == company].index[0]
    distances = sim[cmp_idx]
    cmp_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:10]

    result=[]
    for idx, distance in cmp_list:
        similar_company_name = companies.iloc[idx]['name']
        result.append(similar_company_name)
    return result

companies_list = pickle.load(open('companies_dict.pkl','rb'))
companies = pd.DataFrame(companies_list)
sim = pickle.load(open('similarity.pkl','rb'))

st.title('IdeaNest')
option = st.selectbox(
    'In which company you are interested in?',
    companies['name'].values)

if st.button('Recommend'):
    ans=recommender(option)
    for i in ans:
        st.write(i)


