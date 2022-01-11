#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkShopStack } from '../lib/cdk_work_shop-stack';

const app = new cdk.App();
new CdkWorkShopStack(app, 'CdkWorkShopStack');
