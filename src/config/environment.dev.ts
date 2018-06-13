import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBAxkuZJ-U_PdwvMx0jo_rw3Wo4t3hGoMk',
    authDomain: 'sk8-project.firebaseapp.com',
    databaseURL: 'https://sk8-project.firebaseio.com',
    projectId: 'sk8-project',
    storageBucket: 'sk8-project.appspot.com',
    messagingSenderId: '424545481743'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
