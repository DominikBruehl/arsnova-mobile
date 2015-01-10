/*
 * This file is part of ARSnova Mobile.
 * Copyright (C) 2011-2012 Christian Thomas Weber
 * Copyright (C) 2012-2015 The ARSnova Team
 *
 * ARSnova Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ARSnova Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ARSnova Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */

// Android browser return always English as language, even when your phone is set up with a different one. Because of
// that, we read here the user agent and we extract from there the phone language. For all the other devices,
// "navigator.language" should give as the correct language.

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var isChrome = ua.indexOf("chrome") > -1;
//var lang; // without declaration with "var" lang will be globally accessible

if (isAndroid && !isChrome) {
	if (navigator && navigator.userAgent && (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) {
		lang = lang[1];
	}
} else {
	lang = navigator.language;
}

try {
	var prefLang = localStorage.getItem("language");
} catch (e) {			
	var prefLang = undefined;
}

if (prefLang != undefined) {
	lang = prefLang;
}

if (lang != null) {
	lang = lang.toLowerCase();
}

var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

switch (lang) {
	case 'en':case 'en-en':case 'en-us':case 'en-gb':
		moment.lang('en');
		Messages = {
			PRIVACY_MODE_WARNING_TITLE: "Privacy Mode",
			PRIVACY_MODE_WARNING_TEXT: "Unfortunately ARSnova isn't working in Privacy Mode, as your browser denies to write to the application storage.\nPlease deactivate Privacy Mode for the period of usage of ARSnova and reload the page. Your anonymity is guaranteed even when private browsing mode is disabled.",
			BROWSER_NOT_SUPPORTED_MESSAGE: "Please use one of the following officially supported browsers: ###.",
			UPDATE_BROWSER_MESSAGE: "Please update your ### browser in order to use ARSnova.",
			FEATURE_COMING_SOON: "This feature will be available soon.",
			UNI_LOGIN_MSG: "Your University here?",
			UNI_LOGIN_MSG_TEXT: "Would you like to use your university's account? Contact us @ <a href='http://www.transmit.de/zentren/tz.cfm?N=189' target='_blank'>transmit.de</a>.",

			/* rolePanel */
			BLOG: "Blog",
			CHOOSE_ROLE: "Choose your role:",
			STUDENT: "Student",
			SPEAKER: "Teacher",
			TITLE_ROLE: "Audience Response System",
			/* loginPanel */
			CHOOSE_LOGIN: "Login as:",
			GUEST: "Guest",
			CHANGE_ROLE: "Change role",
			NO_GUEST_SPEAKER: "Note: You have to log in to create a session.",
			CONFIRM_GUEST_SPEAKER: "If you login as guest, you can manage newly created ARSnova sessions only from this device. Still login as guest?",
			GUEST_LOGIN: "Guest login",
			BACK_TO_ROLEPANEL: "Role",

			/* homePanel */
			LOGOUT: "Log out",
			LOGOUT_REQUEST: "Do you really want to logout?",
			SESSIONID_PLACEHOLDER: "Enter Session ID  (8 digits)",
			ENTER_SESSIONID: "Insert Session ID:",
			GO: "Enter Session",
			YOUR_COURSE_SESSIONS: "Choose from your Moodle courses",
			LAST_VISITED_SESSIONS_STUDENT: "Visited Sessions",
			LAST_VISITED_SESSIONS_SPEAKER: "Visited Sessions as student",
			LEGEND: "Color and Badge Legend",
			OPEN_SESSION: "Open Session",
			CLOSED_SESSION: "Closed Session",
			CONFIRM_CLOSE_SESSION: "Are you sure to lock access to this session?",
			CONFIRM_CLOSE_SESSION_MESSAGE: "If you lock the access, only students currently online will be able to participate.",

			/* LOAD MASK */
			LOAD_MASK: "Loading...",
			LOAD_MASK_LOGIN: "Login...",
			LOAD_MASK_SEARCH: "Looking for sessions...",
			LOAD_MASK_SEARCH_QUESTIONS: "Looking for questions...",
			LOAD_MASK_SEARCH_COURSES: "Looking for courses...",
			LOAD_MASK_SESSION_DELETE: "Deleting session data...",
			LOAD_MASK_ACTIVATION: "Releasing question...",

			/* mySessionsPanel */
			HOME: "Start",
			SESSION: "Session",
			NEW_SESSIONS: "New session",
			MY_SESSIONS: "My sessions",
			SESSIONS: "Sessions",
			SESSIONID_WILL_BE_CREATED: "Session ID will be created...",
			SESSION_NAME: "Name",
			SESSION_NAME_PLACEHOLDER: "max. 50 digits",
			SESSION_SHORT_NAME: "Short name",
			SESSION_SHORT_NAME_PLACEHOLDER: "max. 8 digits",
			SESSION_SAVE: "Create Session",
			SAVE: 'Save',

			/* canteen */
			CANTEEN: 'Canteen',
			I_RECOMMEND: "I recommend...",
			LOGIN: "Login",
			CANTEEN_MENU: "Menu",

			/* feedback */
			FEEDBACK: "Feedback",
			MY_FEEDBACK: "My feedback",
			RESET_FEEDBACK: 'Reset feedback',
			FEEDBACK_GOOD: "Faster, please!",
			FEEDBACK_OKAY: "I can follow you.",
			FEEDBACK_BAD: "Slower, please!",
			FEEDBACK_NONE: "You've lost me.",
			FEEDBACK_VOTE: "Feedback",
			FEEDBACK_RESET: 'Your feedback has been reset',
			QUESTION_TO_SPEAKER: 'Feedback',
			QUESTION_INSTRUCTION: 'You are asking this question anonymously.',
			QUESTION_TEXT: "Question",
			QUESTION_TEXT_PLACEHOLDER: "If the teacher has seen your question, it is displayed in grey color. Answers to your questions can not be given in ARSnova.",
			QUESTION_SUBJECT: "Subject",
			QUESTION_SUBJECT_PLACEHOLDER: "max. 50 characters",
			QUESTION_SAVED: 'Your question has been saved.',
			NOTIFICATION: "Notice",
			TRANSMISSION_ERROR: "The question's transmission was unsuccessful.",
			QUESTION_CREATION_ERROR: "Failed creating the question.",
			QUESTION_EDIT_ERROR: "Failed editing the question.",
			ANSWER_CREATION_ERROR: "Your answer could not be saved.",
			SEND: "Send",

			/* questions */
			QUESTION: "Question",
			QUESTION_PLACEHOLDER: "Enter question",
			QUESTIONTEXT_PLACEHOLDER: "Enter question",
			QUESTION_MANAGEMENT: "Question Management",
			QUESTIONS: "Questions",
			QUESTION_DETAILS: "Details",
			QUESTION_DATE: "Date",
			DELETE: "Delete",
			EDIT: "Edit",
			CANCEL: "Cancel",
			DURATION: "Duration",
			SUBMIT_ANSWER: "Submit answer?",
			NO_QUESTIONS: "No questions found.",
			NO_UNLOCKED_QUESTIONS: "There are prepared questions, but these are currently not unlocked by your teacher.",
			LOADING_NEW_QUESTIONS: "Loading new questions.",
			NO_DATE: "No date",
			NO_SUBJECT: "No subject",
			SESSION_CLOSE_NOTICE: 'In order to prevent multiple votings, your teacher has closed the session. Please log out at the end of the lecture!',
			NOTICE_READ: "I understand it",
			STATUS: "Status",
			FREETEXT_ANSWER_TEXT: "My Answer",
			FREETEXT_DETAIL_HEADER: "Answer",
			FREETEXT_DETAIL_ANSWER: "Answer",
			NO_ANSWERS: "No answers found.",
			ANSWER_SAVED: 'Your answer has been saved.',
			MISSING_INPUT: "Please fill out all required fields.",
			SHOWCASE: "Showcase",
			LEAVE: "Leave",
			MEMBERS_ONLY: "This question is visible to course members only.",
			QUESTION_RATING: "Likert-type Scale",
			QUESTION_RATING_SHORT: "Rating",
			QUESTION_GRADE: "Grading",
			QUESTION_GRADE_SHORT: "Grade",
			QUESTION_GRID: "Picture Question",
			QUESTION_GRID_SHORT: "Picture",
			QUESTION_MC: "Multiple Choice: Select",
			QUESTION_MC_SHORT: "MC",
			QUESTION_YESNO: "Polar Question",
			QUESTION_YESNO_SHORT: "Yes | No",
			QUESTION_SINGLE_CHOICE: "Single Choice: Choose",
			QUESTION_SINGLE_CHOICE_SHORT: "Single",
			QUESTION_FREETEXT: "Open-ended Question",
			QUESTION_FREETEXT_SHORT: "Free text",
			OPEN_QUESTION: "Open Question",
			CLOSED_QUESTION: "Closed Question",
			CONFIRM_CLOSE_QUESTION: "Are you sure to close this question?",
			CONFIRM_CLOSE_ALL_QUESTIONS: "Are you sure to close all questions?",
			CONFIRM_CLOSE_QUESTION_MESSAGE: "If you close this question, students will not be able to view or answer this question.",
			CONFIRM_CLOSE_ALL_QUESTIONS_MESSAGE: "If you close all questions, students will not be able to view or answer any question.",
			CONFIRM_ANSWERS_CHANGED: "This will reset all current answers.",
			QUESTION_PREVIEW_BUTTON_TITLE: "Preview",
			QUESTION_PREVIEW_DIALOGBOX_TITLE: "Question preview",
			QUESTION_PREVIEW_DIALOGBOX_BUTTON_TITLE: "Close preview",
			ANSWER_PREVIEW_BUTTON_TITLE: "Preview",
			ANSWER_PREVIEW_DIALOGBOX_TITLE: "Preview answers",
			ANSWER_PREVIEW_DIALOGBOX_BUTTON_TITLE: "OK",
			ANSWER_POINTS: "Answer points",
			ANSWER_POINTS_CORRECT: "Correct",
			ANSWER_POINTS_INCORRECT: "Incorrect",

			/* user */
			QUESTIONS_TO_STUDENTS: "Teacher's questions",
			QUESTIONS_FROM_STUDENTS: "Student questions",
			PREPARATION_QUESTIONS: "Prep questions",
			PREPARATION_QUESTIONS_LONG: "Preparation questions",
			PREPARATION_QUESTION_SHORT: "Prep question",
			PREPARATION_QUESTION_LONG: "Preparation question",
			QUESTION_REQUEST: "I've got a quetstion",
			LECTURE_QUESTIONS: "Lecture",
			LECTURE_QUESTION_LONG: "Lecture question",
			LECTURE_QUESTIONS_LONG: "Lecture questions",
			FLASHCARD_SHORT: "FC",
			FLASHCARDS: "Flashcards",
			FLASHCARD: "Flashcard",
			ONE_NEW_QUESTION: 'There is one new question.',
			WANNA_ANSWER: 'Would you like to answer now?',
			THERE_ARE: "There are",
			NEW_QUESTIONS: "new questions.",
			MY_QUESTIONS: "My questions",
			MY_LEARNING_PROGRESS: "My progress",
			VERSUS: "vs",
			LEARN: "Learn",
			LEARN_WITH_SELECTION: "Learn with selection",
			UNANSWERED_QUESTIONS: "Open Questions",
			PREPARATION: "Preparation",
			LECTURE: "Lecture",
			RESET_ALL_ANSWERS: "Reset all answers",
			SHOW_FLASHCARD_ANSWER: "Show answer",
			HIDE_FLASHCARD_ANSWER: "Hide answer",

			/* speaker */
			LIVE_FEEDBACK: "Instant feedback",
			COURSES_LEARNING_PROGRESS: "Class progress",
			NEW_LECTURE_QUESTION: "New lecture question",
			NEW_PREPARATION_QUESTION: "New preparation question",
			NEW_QUESTION_TITLE: "Question",
			ARE_YOU_SURE: "Are you sure?",
			DELETE_SESSION_NOTICE: "All questions and answers of this session will be deleted.",
			CATEGORY: "Subject",
			CATEGORY_PLACEHOLDER: "Enter subject",
			ALL_SHORT: 'All',
			ONLY_THM_SHORT: 'Uni only',
			ALL_LONG: 'All (incl. guest)',
			ONLY_THM_LONG: 'Only university members',
			RELEASE_FOR: 'Release for',
			ABSTENTION: 'Abstention',
			ABSTENTION_POSSIBLE: 'Abstention possible?',
			MY_COURSES: "My courses:",
			COULD_NOT_SEARCH: "Could not search courses.",
			CORRECT_ANSWER: 'Correct answer',
			YES: "Yes",
			NO: "No",
			NONE: "None",
			ANSWERS: "Answers",
			ANSWER_OPTIONS: "Answer options",
			ENTER_ANSWER_OPTION: "Enter option",
			ANSWERS_PER_QUESTION: "Answers per question",
			ANSWER: "Answer",
			COUNT: "Count",
			CORRECT: "Correct",
			CORRECT_PLACEHOLDER: "Correct answer",
			WRONG: "Wrong",
			WRONG_PLACEHOLDER: "Wrong answer",
			OPTION_PLACEHOLDER: "Option",
			STATISTIC: "Statistics",
			DELETE_ALL: "Delete all",
			DELETE_ANSWERS_REQUEST: "Delete answers?",
			DELETE_ALL_ANSWERS_REQUEST: "Delete all answers?",
			QUESTION_REMAINS: "The question itself stays unaffected.",
			INCOMPLETE_INPUTS: "Your petitions are incomplete.",
			ALL_QUESTIONS_REMAIN: "The questions themselves stay unaffected.",
			DELETE_ALL_ANSWERS_INFO: "This will also delete all previously given answers.",
			CHANGE_RELEASE: "Changing the release...",
			TYPE: 'Type',
			RELEASED: "Released",
			NOT_RELEASED: "Not released",
			INFINITE: "infinite",
			MINUTE: "Minute",
			MINUTES: "Minutes",
			BACK: "Back",
			FLASHCARD_FRONT_PAGE: 'Front page',
			FLASHCARD_BACK_PAGE: 'Back page',
			SAVE_AND_CONTINUE: "Save and ask a new question",
			SELECT_PICTURE_FS: "URL",
			SELECT_PICTURE_URL: "From URL",
			SELECT_PICTURE_URL_SHORT: "URL",
			CHOOSE_PICTURE: "Choose image",
			SEARCH_PICTURE: "Picture",
			SEARCH_PICTURE_SHORT: "Picture",
			EDIT_PICTURE: "Upload Image",
			GRID_LOADING: "Loading",
			GRID_LOAD: "Load",
			GRID_ERROR_URL_MISSING: "Please insert a valid url.",
			GRID_ERROR_IMAGE_NOT_LOADED: "The image could not be loaded.",
			GRID_LABEL_ZOOM: "Zoom (in percent)",
			GRID_LABEL_SQUARES: "Squares per edge",
			GRID_LABEL_FIELD_X: "Number of fields on x-axis",
			GRID_LABEL_FIELD_Y: "Number of fields on y-axis",
			GRID_LABEL_WEAKEN_IMAGE: "Transparent image",
			GRID_LABEL_SHOW_HEATMAP: "Show heatmap",
			GRID_LABEL_HEATMAP: "Heatmap",
			GRID_LABEL_HEATMAP_SHORT: "HM",
			GRID_LABEL_SHOW_PERCENT: "Show results",
			GRID_LABEL_INVERT_GRIDCOLORS: "Invert grid colors",
			GRID_LABEL_CV_TRANSPARENCY: "color background",
			GRID_LABEL_ABSOLUTE: 'absolute',
			GRID_LABEL_RELATIVE: 'relative',
			GRID_LABEL_ABSOLUTE_SHORT: '#',
			GRID_LABEL_RELATIVE_SHORT: '%',
			GRID_LABEL_NONE_SHORT: 'w/o',
			GRID_LABEL_NONE: 'none',
			GRID_LABEL_MARK_TOGGLE_ANSWERS: "Deselect number of ckech mark",
			GRID_LABEL_THRESHOLD_CORRECT_ANSWERS: "Value of correct answers ",
			GRID_ERROR_LOADING_IMAGE_FS: 'Could not load image from filesystem',
			GRID_CONFIG_IMAGE: "Image configuration",
			GRID_CONFIG_GRID: "Grid configuration",
			GRID_LABEL_REMAINING_DOTS: "Remaining dots: ",
			GRID_LABEL_NUMBER_OF_DOTS: "Number of dots",
			GRID_LABEL_DELETE_MODERATION: "Remove template",
			ERROR: 'Error',
			CORRECT_ANSWERS: "Correct answers",
			SETTINGS: "Settings",
			SETTINGS_HINT_TEXT: "Hint <br>Maximal filesize is 1 MB.",
			TEMPLATE:	"Template",
			CONTINUE:	"Continue",
			DOWNLOAD:	"Download",

			/* question types */
			EVALUATION: "+-",
			SCHOOL: "A-F",
			MC: "MC",
			YESNO: "YN",
			ABCD: "SC",
			GRID: "P",
			FREETEXT: "Txt",
			MC_LONG: "Multiple Choice",
			ABCD_LONG: "Single Choice",
			EVALUATION_LONG: "Rating",
			SCHOOL_LONG: 'Grade',
			YESNO_LONG: 'Yes|No',
			GRID_LONG: "Pic Question",
			FREETEXT_LONG: 'Free text',
			BUZZWORD: "Buzzword for",
			BUZZWORD_A: "Buzzword for A",
			BUZZWORD_B: "Buzzword for B",
			BUZZWORD_C: "Buzzword for C",
			BUZZWORD_D: "Buzzword for D",
			SCHOOL_A: "excellent",
			SCHOOL_B: "good",
			SCHOOL_C: "average",
			SCHOOL_D: "poor",
			SCHOOL_E: "very poor",
			SCHOOL_F: "inadequate",
			SCHOOL_NONE: "abstention",
			EVALUATION_PLUSPLUS: "strongly agree",
			EVALUATION_PLUS: "agree",
			EVALUATION_NEUTRAL: "neutral",
			EVALUATION_MINUS: "disagree",
			EVALUATION_MINUSMINUS: "strongly disagree",
			
			/* action buttons - <br/> forces line break for consistent look */
			CREATE_NEW_SESSION: "Create new<br/>session",
			NEW_QUESTION: "Create new<br/>question",
			SHOWCASE_MODE: "Present<br/>question",
			SHOW_STATISTIC: "Show<br/>statistics",
			RELEASE_STATISTIC: "Release<br/>statistics",
			RELEASE_QUESTION: "Release<br/>question",
			RELEASE_ALL_QUESTIONS: "Release<br/>questions",
			STOP_QUESTION: "Lock<br/>question",
			STOP_ALL_QUESTIONS: "Lock<br/>questions",
			START_SESSION: "Open<br/>access",
			STOP_SESSION: "Lock<br/>access",
			MARK_CORRECT_ANSWER: "Mark<br/>correct",
			DELETE_QUESTION: "Delete<br/>question",
			DELETE_ALL_QUESTIONS: "Delete<br/>questions",
			DELETE_ANSWERS: "Delete<br/>answers",
			DELETE_SESSION: "Delete<br/>session",
			GIVE_FEEDBACK: "Give instant<br/>feedback",
			QUESTION_REQUEST_ADHOC: "I've got a<br/>question",

			/* about */
			INFO: "Manual",
			ABOUT: "About",
			IMPRINT: "Imprint",
			PRIVACY: "Privacy Policy",
			ARSNOVA_MANUAL: "Manual",
			ARSNOVA_FAQ: "FAQ | Helpdesk",

			OPINION: "Your opinion matters",
			WIDGET_IS_LOADING: 'Widget is loading...',
			IMPRESSUM: "Imprint",
			RELOAD_SURE: "Do you want to reload ARSnova?",
			OPEN_SESSIONS: "Sessions: open",
			ACTIVE_SESSIONS: "Sessions: active",
			CLOSED_SESSIONS: "Sessions: closed",
			NOT_RELEASED_YET: "The instructor has not yet released the correct answer.",
			STUDENTS_USE_CASES: "Student's Use Cases",
			TEACHERS_USE_CASES: "Teacher's Use Cases",

			/* diagnosis */
			DIAGNOSIS: "System",
			BROWSER_INFO: "Browser information",
			ARSNOVA_RELOAD: "Reload ARSnova",

			/* credits */
			HMWK: "HMWK",
			ELEARNINGHESSEN: "Kompetenznetz E-Learning Hessen",
			AGQLS: "AG QLS",
			SENCHA_TOUCH: "UI Library: Sencha Touch",
			NGINX: "Webserver: nginx",
			CAS: "Single Sign-On: CAS",
			COUCHDB: "NoSQL Database: CouchDB",
			XEN: "Virtualization: Xen",
			DEBIAN: "Operating System: Debian",

			/* errors */
			SESSION_NOT_FOUND: "This session does not seem to exist.",
			SESSION_LOCKED: "This session is currently locked.",
			CONNECTION_PROBLEM: "The connection to the server has failed.",
			SESSION_ID_INVALID_LENGTH: "The Session ID has to be exactly 8 digits.",
			SESSION_ID_INVALID: "The Session ID may only consist of 8 digits.",
			BROWSER_SESSION_EXPIRED: "Browser Session Expired",
			BROWSER_SESSION_EXPIRED_MSG: "Your current browser session is expired. Do you want to restart ARSnova?",
			QUESTION_COULD_NOT_BE_SAVED: "Could not save question",

			/* misc */
			SUPPORTED_BROWSERES: "ARSnova is best-viewed in a WebKit browser, e.g. Apple Safari or Google Chrome!",
			NEW_VERSION_TITLE: "New Version",
			NEW_VERSION_AVAILABLE: "A new version of ARSnova is available. Do you want to update?",
			PRESENTER: "Presenter",
			UNI: "Uni",
			SESSION_ID: "Session ID"
		};

		break;
	default:
		moment.lang('de');
		Messages = {
			PRIVACY_MODE_WARNING_TITLE: "Privater Modus",
			PRIVACY_MODE_WARNING_TEXT: "Im Privaten Modus Ihres Browsers funktioniert ARSnova leider nicht, da Ihr Browser das Beschreiben des App-Speichers verweigert. Bitte für die Dauer der Nutzung von ARSnova den Privaten Modus deaktivieren und ARSnova erneut aufrufen. Ihre Anonymität bleibt auch im deaktivierten Privaten Modus gewahrt.",
			BROWSER_NOT_SUPPORTED_MESSAGE: "Bitte verwenden Sie einen der folgenden Browser für ARSnova: ###.",
			UPDATE_BROWSER_MESSAGE: "Bitte aktualisieren Sie Ihren ###-Browser, um ARSnova verwenden zu können.",
			FEATURE_COMING_SOON: "Feature kommt in Kürze.",
			UNI_LOGIN_MSG: "Ihr Uni-Login an dieser Stelle?",
			UNI_LOGIN_MSG_TEXT: "Möchten Sie Ihren hochschuleigenen Zugang verwenden? Sprechen Sie mit uns unter <a href='http://www.transmit.de/zentren/tz.cfm?N=189' target='_blank'>transmit.de</a>.",

			/* rolePanel */
			BLOG: "Blog",
			CHOOSE_ROLE: "Wählen Sie Ihre Rolle:",
			STUDENT: "Student/in",
			SPEAKER: "Dozent/in",
			TITLE_ROLE: "Feedback im Hörsaal",
			/* loginPanel */
			CHOOSE_LOGIN: 'Wählen Sie Ihren Zugang:',
			GUEST: "Gast",
			CHANGE_ROLE: "Rolle wechseln",
			NO_GUEST_SPEAKER: "Hinweis: Um eine Session anzulegen, müssen Sie sich anmelden.",
			CONFIRM_GUEST_SPEAKER: "Wenn Sie sich als Gast anmelden, ist die ARSnova-Session nur auf dem aktuellen Gerät verwaltbar. Dennoch als Gast anmelden?",
			GUEST_LOGIN: "Gast-Anmeldung",
			BACK_TO_ROLEPANEL: "Rollen",

			/* homePanel */
			LOGOUT: "Log out",
			LOGOUT_REQUEST: "Möchten Sie sich wirklich von ARSnova abmelden?",
			SESSIONID_PLACEHOLDER: "Zugangsschlüssel (8 Ziffern)",
			ENTER_SESSIONID: "Bitte Session-ID eingeben",
			GO: "Session betreten",
			YOUR_COURSE_SESSIONS: "Auswählbare Moodle-Kurse",
			LAST_VISITED_SESSIONS_SPEAKER: "Als Student/in besuchte Sessions",
			LAST_VISITED_SESSIONS_STUDENT: "Besuchte Sessions",
			LEGEND: "Farben- und Badge-Legende",
			OPEN_SESSION: "Offene Session",
			CLOSED_SESSION: "Gesperrte Session",
			CONFIRM_CLOSE_SESSION: "Zugang wirklich sperren?",
			CONFIRM_CLOSE_SESSION_MESSAGE: "Wenn Sie den Zugang sperren, können nur noch aktuell angemeldete Student/innen teilnehmen.",

			/* LOAD MASK */
			LOAD_MASK: "Lade Daten...",
			LOAD_MASK_LOGIN: "Login...",
			LOAD_MASK_SEARCH: "Suche Sessions...",
			LOAD_MASK_SEARCH_QUESTIONS: "Suche Fragen...",
			LOAD_MASK_SEARCH_COURSES: "Suche Kurse...",
			LOAD_MASK_SESSION_DELETE: "Lösche Session-Daten...",
			LOAD_MASK_ACTIVATION: "Aktiviere die Freigabe...",

			/* mySessionsPanel */
			HOME: "Start",
			SESSION: "Session",
			NEW_SESSIONS: "Neue Session",
			MY_SESSIONS: "Meine Sessions",
			SESSIONS: "Sessions",
			SESSIONID_WILL_BE_CREATED: "Session-ID wird erzeugt...",
			SESSION_NAME: "Name",
			SESSION_NAME_PLACEHOLDER: "max. 50 Zeichen",
			SESSION_SHORT_NAME: "Kürzel",
			SESSION_SHORT_NAME_PLACEHOLDER: "max. 8 Zeichen",
			SESSION_SAVE: "Session anlegen",
			SAVE: 'Speichern',

			/* canteen */
			CANTEEN: 'Mensa',
			I_RECOMMEND: "Ich empfehle...",
			LOGIN: "Login",
			CANTEEN_MENU: "Speiseplan",

			/* feedback */
			FEEDBACK: "Feedback",
			MY_FEEDBACK: "Mein Feedback",
			RESET_FEEDBACK: 'Zurücksetzen',
			FEEDBACK_GOOD: "Bitte schneller",
			FEEDBACK_OKAY: "Kann folgen",
			FEEDBACK_BAD: "Zu schnell",
			FEEDBACK_NONE: "Abgehängt",
			FEEDBACK_VOTE: "Feedback",
			FEEDBACK_RESET: 'Ihr Feedback wurde zurückgesetzt',
			QUESTION_TO_SPEAKER: 'Feedback',
			QUESTION_INSTRUCTION: 'Sie stellen diese Frage anonym.',
			QUESTION_TEXT: "Frage",
			QUESTION_TEXT_PLACEHOLDER: "Wenn die Lehrperson Ihre Frage angesehen hat, wird sie Ihnen grau angezeigt. Antworten auf Ihre Fragen können in ARSnova nicht gegeben werden.",
			QUESTION_SUBJECT: "Thema",
			QUESTION_SUBJECT_PLACEHOLDER: "max. 50 Zeichen",
			QUESTION_SAVED: 'Ihre Frage wurde gespeichert',
			NOTIFICATION: "Hinweis",
			TRANSMISSION_ERROR: "Die Übermittlung der Frage war leider nicht erfolgreich",
			QUESTION_CREATION_ERROR: "Das Erstellen der Frage war leider nicht erfolgreich",
			QUESTION_EDIT_ERROR: "Das Editieren der Frage war leider nicht erfolgreich.",
			ANSWER_CREATION_ERROR: "Die Antwort konnte nicht gespeichert werden",
			SEND: "Abschicken",

			/* questions */
			QUESTION: "Frage",
			QUESTION_PLACEHOLDER: "Frage eingeben",
			QUESTIONTEXT_PLACEHOLDER: "Frage eingeben",
			QUESTION_MANAGEMENT: "Fragenverwaltung",
			QUESTIONS: "Fragen",
			QUESTION_DETAILS: "Details",
			QUESTION_DATE: "Datum",
			DELETE: "Löschen",
			EDIT: "Bearbeiten",
			CANCEL: "Abbrechen",
			DURATION: "Dauer",
			SUBMIT_ANSWER: "Antwort abschicken?",
			NO_QUESTIONS: "Keine Fragen vorhanden.",
			NO_UNLOCKED_QUESTIONS: "Es gibt vorbereitete Fragen, diese sind aber noch nicht freigeschaltet.",
			LOADING_NEW_QUESTIONS: "Lade neue Fragen",
			NO_DATE: "Kein Datum",
			NO_SUBJECT: "Kein Thema",
			SESSION_CLOSE_NOTICE: 'Um mehrfaches Abstimmen zu verhindern, hat Ihr Dozent die Session gesperrt. Loggen Sie sich bitte erst am Ende der Vorlesung aus!',
			NOTICE_READ: "Ich hab's verstanden",
			STATUS: "Status",
			FREETEXT_ANSWER_TEXT: "Meine Antwort",
			FREETEXT_DETAIL_HEADER: "Antwort",
			FREETEXT_DETAIL_ANSWER: "Antwort",
			NO_ANSWERS: "Keine Antworten vorhanden.",
			ANSWER_SAVED: 'Ihre Antwort wurde gespeichert.',
			MISSING_INPUT: "Es müssen alle Felder ausgefüllt werden.",
			SHOWCASE: "Vorstellen",
			LEAVE: "Verlassen",
			MEMBERS_ONLY: "Diese Frage ist nur für Kursmitglieder sichtbar.",
			QUESTION_RATING: "Likert-Skala",
			QUESTION_RATING_SHORT: "Skala",
			QUESTION_GRADE: "Schulnote als Antwort",
			QUESTION_GRADE_SHORT: "Note",
			QUESTION_GRID: "Bildpunkt- oder Punktabfrage",
			QUESTION_GRID_SHORT: "Bild",
			QUESTION_MC: "Mehrfachauswahl",
			QUESTION_MC_SHORT: "MC",
			QUESTION_YESNO: "Entscheidungsfrage",
			QUESTION_YESNO_SHORT: "Ja | Nein",
			QUESTION_SINGLE_CHOICE: "Einfachauswahl",
			QUESTION_SINGLE_CHOICE_SHORT: "SC",
			QUESTION_FREETEXT: "Offene Frage",
			QUESTION_FREETEXT_SHORT: "Text",
			OPEN_QUESTION: "Offene Frage",
			CLOSED_QUESTION: "Gesperrte Frage",
			CONFIRM_CLOSE_QUESTION: "Frage wirklich sperren?",
			CONFIRM_CLOSE_ALL_QUESTIONS: "Fragen wirklich sperren?",
			CONFIRM_CLOSE_QUESTION_MESSAGE: "Wenn Sie die Frage sperren, können Student/innen die Frage weder sehen noch beantworten.",
			CONFIRM_CLOSE_ALL_QUESTIONS_MESSAGE: "Wenn Sie die Fragen sperren, können Student/innen die Fragen weder sehen noch beantworten.",
			SAVE_AND_CONTINUE: 'Speichern und neue Frage stellen',
			CONFIRM_ANSWERS_CHANGED: "Bereits gegebene Antworten gehen verloren.",
			QUESTION_PREVIEW_BUTTON_TITLE: "Vorschau",
			QUESTION_PREVIEW_DIALOGBOX_TITLE: "Vorschau Frage",
			QUESTION_PREVIEW_DIALOGBOX_BUTTON_TITLE: "Vorschau schließen",
			ANSWER_PREVIEW_BUTTON_TITLE: "Vorschau",
			ANSWER_PREVIEW_DIALOGBOX_TITLE: "Vorschau Antworten",
			ANSWER_PREVIEW_DIALOGBOX_BUTTON_TITLE: "OK",
			ANSWER_POINTS: "Antwortpunkte",
			ANSWER_POINTS_CORRECT: "Richtig",
			ANSWER_POINTS_INCORRECT: "Falsch",

			/* user */
			QUESTIONS_TO_STUDENTS: "Fragen ans Publikum",
			QUESTIONS_FROM_STUDENTS: "Fragen der Studenten",
			PREPARATION_QUESTIONS: "Vorbereitung",
			PREPARATION_QUESTIONS_LONG: "Vorbereitungsfragen",
			PREPARATION_QUESTION_SHORT: "Vorbereitung",
			PREPARATION_QUESTION_LONG: "Vorbereitung",
			LECTURE_QUESTIONS: "Hörsaal",
			LECTURE_QUESTION_LONG: "Hörsaalfrage",
			LECTURE_QUESTIONS_LONG: "Hörsaalfragen",
			QUESTION_REQUEST: 'Ich habe eine Frage',
			FLASHCARD_SHORT: "LK",
			FLASHCARDS: "Lernkarten",
			FLASHCARD: "Lernkarte",
			ONE_NEW_QUESTION: 'Es gibt eine neue Frage.',
			WANNA_ANSWER: 'Möchten Sie jetzt antworten?',
			THERE_ARE: "Es gibt",
			NEW_QUESTIONS: "neue Fragen.",
			MY_QUESTIONS: "Meine Fragen",
			MY_LEARNING_PROGRESS: "Mein Lernstand",
			VERSUS: "vs.",
			LEARN: "Lernen",
			LEARN_WITH_SELECTION: "Mit Auswahl lernen",
			UNANSWERED_QUESTIONS: "Offene Fragen",
			PREPARATION: "Vorbereitung",
			LECTURE: "Hörsaal",
			RESET_ALL_ANSWERS: "Alle Antworten zurücksetzen",
			SHOW_FLASHCARD_ANSWER: "Antwort anzeigen",
			HIDE_FLASHCARD_ANSWER: "Antwort ausblenden",

			/* speaker */
			LIVE_FEEDBACK: "Live-Feedback",
			COURSES_LEARNING_PROGRESS: "Lernstand des Kurses",
			NEW_LECTURE_QUESTION: "Neue Hörsaalfrage",
			NEW_PREPARATION_QUESTION: "Neue Vorbereitungsfrage",
			NEW_QUESTION_TITLE: "Frage",
			ARE_YOU_SURE: "Sind Sie sicher?",
			DELETE_SESSION_NOTICE: "Es werden alle Fragen und Antworten der Session gelöscht.",
			CATEGORY: "Thema",
			CATEGORY_PLACEHOLDER: "Thema eingeben",
			ALL_SHORT: 'Alle',
			ONLY_THM_SHORT: 'Nur Uni',
			ALL_LONG: 'Alle (auch Gäste)',
			ONLY_THM_LONG: 'Nur Uni-Mitglieder',
			RELEASE_FOR: 'Freigeben für',
			ABSTENTION: 'Enthaltung',
			ABSTENTION_POSSIBLE: 'Enthaltung möglich?',
			MY_COURSES: "Meine Kurse:",
			NO_COURSES_FOUND: "Es konnten keine Kurse gesucht werden.",
			CORRECT_ANSWER: 'Richtige Antwort',
			YES: "Ja",
			NO: "Nein",
			NONE: "Keine",
			ANSWERS: "Antworten",
			ANSWER_OPTIONS: "Antwortmöglichkeiten",
			ENTER_ANSWER_OPTION: "Antwortmöglichkeit",
			ANSWERS_PER_QUESTION: "Antworten pro Frage",
			ANSWER: "Antwort",
			COUNT: "Anzahl",
			CORRECT: "Richtig",
			CORRECT_PLACEHOLDER: "Richtige Antwort",
			WRONG: "Falsch",
			WRONG_PLACEHOLDER: "Falsche Antwort",
			OPTION_PLACEHOLDER: "Option",
			STATISTIC: "Statistik",
			DELETE_ALL: "Alle löschen",
			DELETE_ANSWERS_REQUEST: "Antworten löschen?",
			DELETE_ALL_ANSWERS_REQUEST: "Alle Antworten löschen?",
			ALL_QUESTIONS_REMAIN: "Alle Fragen bleiben erhalten.",
			QUESTION_REMAINS: "Die Frage bleibt erhalten.",
			INCOMPLETE_INPUTS: "Ihre Eingaben sind unvollständig.",
			DELETE_ALL_ANSWERS_INFO: "Es werden auch alle bisher gegebenen Antworten gelöscht.",
			CHANGE_RELEASE: "Ändere die Freigabe...",
			TYPE: 'Typ',
			RELEASED: "Freigegeben",
			NOT_RELEASED: "Nicht freigegeben",
			INFINITE: "unbegrenzt",
			MINUTE: "Minute",
			MINUTES: "Minuten",
			BACK: "Zurück",
			FLASHCARD_FRONT_PAGE: 'Vorderseite',
			FLASHCARD_BACK_PAGE: 'Rückseite',
			SELECT_PICTURE_FS: "URL",
			SELECT_PICTURE_URL: "Von URL",
			SELECT_PICTURE_URL_SHORT: "URL",
			CHOOSE_PICTURE: "Bild wählen",
			SEARCH_PICTURE: "Foto",
			SEARCH_PICTURE_SHORT: "Foto",
			EDIT_PICTURE: "Bild hochladen",
			GRID_LOADING: "Lade",
			GRID_LOAD: "Laden",
			GRID_ERROR_URL_MISSING: "Bitte geben Sie eine URL an.",
			GRID_ERROR_IMAGE_NOT_LOADED: "Bild konnte nicht geladen werden.",
			GRID_LABEL_ZOOM: "Zoom (in %)",
			GRID_LABEL_FIELD_X: "Anzahl Felder an x-Achse",
			GRID_LABEL_FIELD_Y: "Anzahl Felder an y-Achse",
			GRID_LABEL_WEAKEN_IMAGE: "Bild abschwächen",
			GRID_LABEL_SHOW_HEATMAP: "Heatmap anzeigen",
			GRID_LABEL_HEATMAP: "Heatmap",
			GRID_LABEL_HEATMAP_SHORT: "HM",
			GRID_LABEL_SHOW_PERCENT: "Zeige Resultate",
			GRID_LABEL_INVERT_GRIDCOLORS: "Rasterfarbe invertieren",
			GRID_LABEL_CV_TRANSPARENCY: "Hintergrund einfärben",
			GRID_LABEL_ABSOLUTE: 'Absolut',
			GRID_LABEL_RELATIVE: 'Prozentual',
			GRID_LABEL_NONE: 'Ausblenden',
			GRID_LABEL_ABSOLUTE_SHORT: '#',
			GRID_LABEL_RELATIVE_SHORT: '%',
			GRID_LABEL_NONE_SHORT: 'ohne',
			GRID_LABEL_MARK_TOGGLE_ANSWERS: "Anzahl Markierung aufheben",
			GRID_LABEL_THRESHOLD_CORRECT_ANSWERS: "Wert korrekter Antworten",
			GRID_ERROR_LOADING_IMAGE_FS: 'Bild konnte nicht geladen werden',
			GRID_CONFIG_IMAGE: "Bildeinstellungen",
			GRID_CONFIG_GRID: "Rastereinstellungen",
			GRID_LABEL_REMAINING_DOTS: "Verbleibende Klebepunkte: ",
			GRID_LABEL_NUMBER_OF_DOTS: "Anzahl Klebepunkte",
			GRID_LABEL_DELETE_MODERATION: "Template löschen",
			ERROR: 'Fehler',
			CORRECT_ANSWERS: "Richtige Antworten",
			SETTINGS: "Einstellungen",
			SETTINGS_HINT_TEXT: "Hinweis: <br>Maximale Dateigröße beträgt 1MB.",
			TEMPLATE:	"Vorlage",
			CONTINUE:	"Übernehmen",
			DOWNLOAD:	"Herunterladen",

			/* question types */
			EVALUATION: "+-",
			SCHOOL: "1-6",
			MC: "MC",
			YESNO: "JN",
			ABCD: "SC",
			GRID: "B",
			FREETEXT: "Txt",
			MC_LONG: "MC-Frage",
			ABCD_LONG: "SC-Frage",
			EVALUATION_LONG: "Evaluation",
			SCHOOL_LONG: 'Benotung',
			YESNO_LONG: 'Ja|Nein',
			GRID_LONG: "Bildpunkt",
			FREETEXT_LONG: 'Freitext',
			BUZZWORD: "Schlagwort für",
			BUZZWORD_A: "Schlagwort für A",
			BUZZWORD_B: "Schlagwort für B",
			BUZZWORD_C: "Schlagwort für C",
			BUZZWORD_D: "Schlagwort für D",
			SCHOOL_A: "sehr gut",
			SCHOOL_B: "gut",
			SCHOOL_C: "befriedigend",
			SCHOOL_D: "ausreichend",
			SCHOOL_E: "mangelhaft",
			SCHOOL_F: "ungenügend",
			SCHOOL_NONE: "Enthaltung",
			EVALUATION_PLUSPLUS: "trifft voll zu",
			EVALUATION_PLUS: "trifft eher zu",
			EVALUATION_NEUTRAL: "weder noch",
			EVALUATION_MINUS: "trifft eher nicht zu",
			EVALUATION_MINUSMINUS: "trifft nicht zu",
			
			/* action buttons - <br/> forces line break for consistent look */
			CREATE_NEW_SESSION: "Neue Session<br/>anlegen",
			NEW_QUESTION: "Neue Frage<br/>anlegen",
			SHOWCASE_MODE: "Frage<br/>präsentieren",
			SHOW_STATISTIC: "Statistik<br/>anzeigen",
			RELEASE_STATISTIC: "Statistik<br/>freigeben",
			RELEASE_QUESTION: "Frage<br/>freigeben",
			RELEASE_ALL_QUESTIONS: "Fragen<br/>freigeben",
			STOP_QUESTION: "Frage<br/>sperren",
			STOP_ALL_QUESTIONS: "Fragen<br/>sperren",
			START_SESSION: "Zugang<br/>freigeben",
			STOP_SESSION: "Zugang<br/>sperren",
			MARK_CORRECT_ANSWER: "Richtig<br/>markieren",
			DELETE_QUESTION: "Frage<br/>löschen",
			DELETE_ALL_QUESTIONS: "Fragen<br/>löschen",
			DELETE_ANSWERS: "Antworten<br/>löschen",
			DELETE_SESSION: "Session<br/>löschen",
			GIVE_FEEDBACK: "Feedback<br/>geben",
			QUESTION_REQUEST_ADHOC: 'Ich habe eine<br/>Frage',

			/* about */
			INFO: "Handbuch",
			ABOUT: "Über",
			IMPRINT: "Impressum",
			PRIVACY: "Datenschutz",
			ARSNOVA_MANUAL: "Anleitung",
			ARSNOVA_FAQ: "FAQ | Helpdesk",
			OPINION: "Deine Meinung ist gefragt",
			WIDGET_IS_LOADING: 'Widget wird geladen...',
			IMPRESSUM: "Impressum",
			RELOAD_SURE: "Möchten Sie ARSnova neu herunterladen?",
			OPEN_SESSIONS: "Sessions: offen",
			ACTIVE_SESSIONS: "Sessions: aktiv",
			CLOSED_SESSIONS: "Sessions: geschlossen",
			NOT_RELEASED_YET: "Der Dozent hat die richtige Antwort noch nicht freigegeben.",
			STUDENTS_USE_CASES: "Für Studenten",
			TEACHERS_USE_CASES: "Für Dozenten",

			/* diagnosis */
			DIAGNOSIS: "System",
			BROWSER_INFO: "Browser-Informationen",
			ARSNOVA_RELOAD: "ARSnova neu laden",

			/* credits */
			HMWK: "HMWK",
			ELEARNINGHESSEN: "Kompetenznetz E-Learning Hessen",
			AGQLS: "AG QLS",
			SENCHA_TOUCH: "UI Library: Sencha Touch",
			NGINX: "Webserver: nginx",
			CAS: "Single Sign-On: CAS",
			COUCHDB: "NoSQL Datenbank: CouchDB",
			XEN: "Virtualisierung: Xen",
			DEBIAN: "Betriebssystem: Debian",

			/* errors */
			SESSION_NOT_FOUND: "Diese Session existiert nicht.",
			SESSION_LOCKED: "Die Session ist derzeit gesperrt.",
			CONNECTION_PROBLEM: "Die Verbindung zum Server konnte nicht hergestellt werden",
			SESSION_ID_INVALID_LENGTH: "Die Session-ID muss 8-stellig sein.",
			SESSION_ID_INVALID: "Die Session-ID muss aus acht Ziffern bestehen.",
			BROWSER_SESSION_EXPIRED: "Browsersitzung abgelaufen",
			BROWSER_SESSION_EXPIRED_MSG: "Ihre Browsersitzung ist abgelaufen. Möchten Sie ARSnova neustarten?",
			QUESTION_COULD_NOT_BE_SAVED: "Speichern der Frage war nicht erfolgreich",

			/* misc */
			SUPPORTED_BROWSERES: "Für eine korrekte Darstellung von ARSnova benutzen Sie bitte einen WebKit-Browser, z.B. Apple Safari oder Google Chrome!",
			NEW_VERSION_TITLE: "Neue Version",
			NEW_VERSION_AVAILABLE: "Eine neue Version von ARSnova ist verfügbar. Möchten Sie aktualisieren?",
			PRESENTER: "Presenter",
			UNI: "Uni",
			SESSION_ID: "Session-ID"
	};
	break;
}
