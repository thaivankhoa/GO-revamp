# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170319022005) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blazer_audits", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "query_id"
    t.text     "statement"
    t.string   "data_source"
    t.datetime "created_at"
  end

  create_table "blazer_checks", force: :cascade do |t|
    t.integer  "creator_id"
    t.integer  "query_id"
    t.string   "state"
    t.string   "schedule"
    t.text     "emails"
    t.string   "check_type"
    t.text     "message"
    t.datetime "last_run_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "blazer_dashboard_queries", force: :cascade do |t|
    t.integer  "dashboard_id"
    t.integer  "query_id"
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "blazer_dashboards", force: :cascade do |t|
    t.integer  "creator_id"
    t.text     "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "blazer_queries", force: :cascade do |t|
    t.integer  "creator_id"
    t.string   "name"
    t.text     "description"
    t.text     "statement"
    t.string   "data_source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "candidate_exams", force: :cascade do |t|
    t.integer  "exam_id"
    t.decimal  "score"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "candidate_id"
    t.boolean  "is_done",      default: false
    t.string   "token"
    t.datetime "end_at"
    t.text     "results"
    t.string   "state"
  end

  add_index "candidate_exams", ["candidate_id"], name: "index_candidate_exams_on_candidate_id", using: :btree
  add_index "candidate_exams", ["exam_id"], name: "index_candidate_exams_on_exam_id", using: :btree

  create_table "candidate_jobs", force: :cascade do |t|
    t.integer  "candidate_id"
    t.integer  "job_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "candidate_jobs", ["candidate_id"], name: "index_candidate_jobs_on_candidate_id", using: :btree
  add_index "candidate_jobs", ["job_id"], name: "index_candidate_jobs_on_job_id", using: :btree

  create_table "candidates", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.text     "cover_letter"
    t.string   "resume"
    t.text     "skills"
    t.text     "profiles"
    t.string   "avatar"
    t.integer  "company_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "candidates", ["company_id"], name: "index_candidates_on_company_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "post_id"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.text     "linkedin"
    t.text     "website"
    t.string   "status"
    t.text     "address"
    t.string   "avatar"
    t.string   "email"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.string   "phone"
    t.integer  "category_id"
    t.string   "slug"
    t.float    "latitude"
    t.float    "longitude"
  end

  add_index "companies", ["category_id"], name: "index_companies_on_category_id", using: :btree
  add_index "companies", ["email"], name: "index_companies_on_email", unique: true, using: :btree

  create_table "contacts", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.text     "subject"
    t.text     "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "exams", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "user_id"
    t.integer  "category_id"
    t.string   "name"
    t.string   "questionnaire_ids"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "num_count",         default: 0
    t.integer  "duration"
  end

  add_index "exams", ["category_id"], name: "index_exams_on_category_id", using: :btree
  add_index "exams", ["company_id"], name: "index_exams_on_company_id", using: :btree
  add_index "exams", ["user_id"], name: "index_exams_on_user_id", using: :btree

  create_table "exams_jobs", force: :cascade do |t|
    t.integer  "exam_id"
    t.integer  "job_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "exams_jobs", ["exam_id"], name: "index_exams_jobs_on_exam_id", using: :btree
  add_index "exams_jobs", ["job_id"], name: "index_exams_jobs_on_job_id", using: :btree

  create_table "exams_questions", force: :cascade do |t|
    t.integer  "exam_id"
    t.integer  "question_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "exams_questions", ["exam_id"], name: "index_exams_questions_on_exam_id", using: :btree
  add_index "exams_questions", ["question_id"], name: "index_exams_questions_on_question_id", using: :btree

  create_table "impressions", force: :cascade do |t|
    t.string   "impressionable_type"
    t.integer  "impressionable_id"
    t.integer  "user_id"
    t.string   "controller_name"
    t.string   "action_name"
    t.string   "view_name"
    t.string   "request_hash"
    t.string   "ip_address"
    t.string   "session_hash"
    t.text     "message"
    t.text     "referrer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "impressions", ["controller_name", "action_name", "ip_address"], name: "controlleraction_ip_index", using: :btree
  add_index "impressions", ["controller_name", "action_name", "request_hash"], name: "controlleraction_request_index", using: :btree
  add_index "impressions", ["controller_name", "action_name", "session_hash"], name: "controlleraction_session_index", using: :btree
  add_index "impressions", ["impressionable_type", "impressionable_id", "ip_address"], name: "poly_ip_index", using: :btree
  add_index "impressions", ["impressionable_type", "impressionable_id", "request_hash"], name: "poly_request_index", using: :btree
  add_index "impressions", ["impressionable_type", "impressionable_id", "session_hash"], name: "poly_session_index", using: :btree
  add_index "impressions", ["impressionable_type", "message", "impressionable_id"], name: "impressionable_type_message_index", using: :btree
  add_index "impressions", ["user_id"], name: "index_impressions_on_user_id", using: :btree

  create_table "jobs", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "company_id"
    t.integer  "category_id"
    t.string   "status"
    t.integer  "salary"
    t.string   "slug"
    t.integer  "num_openings"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "currency"
    t.integer  "min_salary"
    t.integer  "max_salary"
    t.integer  "user_id"
    t.boolean  "is_negotiate", default: false
  end

  add_index "jobs", ["category_id"], name: "index_jobs_on_category_id", using: :btree
  add_index "jobs", ["company_id"], name: "index_jobs_on_company_id", using: :btree
  add_index "jobs", ["slug"], name: "index_jobs_on_slug", using: :btree
  add_index "jobs", ["user_id"], name: "index_jobs_on_user_id", using: :btree

  create_table "levels", force: :cascade do |t|
    t.string   "level_label"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.integer  "user_id"
    t.string   "picture"
    t.integer  "view",              default: 0
    t.integer  "category_id"
    t.integer  "impressions_count"
  end

  create_table "question_levels", force: :cascade do |t|
    t.string   "level_label"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "questionnaires", force: :cascade do |t|
    t.integer  "company_id"
    t.integer  "question_count"
    t.string   "name"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "questionnaires", ["company_id"], name: "index_questionnaires_on_company_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.integer  "questionnaire_id"
    t.string   "question_type"
    t.string   "name"
    t.string   "content"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "category_id"
    t.text     "answers"
    t.integer  "level_id"
  end

  add_index "questions", ["category_id"], name: "index_questions_on_category_id", using: :btree
  add_index "questions", ["level_id"], name: "index_questions_on_level_id", using: :btree
  add_index "questions", ["questionnaire_id"], name: "index_questions_on_questionnaire_id", using: :btree

  create_table "resumes", force: :cascade do |t|
    t.integer  "job_id"
    t.integer  "candidate_id"
    t.string   "resume"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "skills",       default: [],               array: true
    t.decimal  "rating",       default: 0.0
    t.text     "profiles"
  end

  add_index "resumes", ["candidate_id"], name: "index_resumes_on_candidate_id", using: :btree
  add_index "resumes", ["job_id"], name: "index_resumes_on_job_id", using: :btree

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.integer  "resource_id"
    t.string   "resource_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles", ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id", using: :btree
  add_index "roles", ["name"], name: "index_roles_on_name", using: :btree

  create_table "subscriptions", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subscriptions", ["email"], name: "index_subscriptions_on_email", unique: true, using: :btree

  create_table "templates", force: :cascade do |t|
    t.integer  "category_id"
    t.string   "template_type"
    t.string   "name"
    t.string   "content"
    t.string   "questionnaire_ids"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "templates", ["category_id"], name: "index_templates_on_category_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "user_type",              default: 0
    t.string   "avatar"
    t.string   "username"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "users_roles", ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id", using: :btree

  add_foreign_key "candidate_exams", "exams"
  add_foreign_key "candidate_jobs", "candidates"
  add_foreign_key "candidate_jobs", "jobs"
  add_foreign_key "candidates", "companies"
  add_foreign_key "exams", "companies"
  add_foreign_key "exams_jobs", "exams"
  add_foreign_key "exams_jobs", "jobs"
  add_foreign_key "exams_questions", "exams"
  add_foreign_key "exams_questions", "questions"
  add_foreign_key "jobs", "companies"
  add_foreign_key "questionnaires", "companies"
  add_foreign_key "questions", "questionnaires"
end
