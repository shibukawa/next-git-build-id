#!/usr/bin/env node

"use strict"

const gitHash = require("githash");
const { writeFileSync } = require("fs");

const hash = gitHash();

writeFileSync(".next/BUILD_ID", hash, "utf8");
