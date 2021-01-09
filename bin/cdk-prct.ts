#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkPrctStack } from '../lib/cdk-prct-stack';

const app = new cdk.App();
new CdkPrctStack(app, 'CdkPrctStack');
